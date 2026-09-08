// NuGov — O Extrato da República Engine

let allTransactions = [];
let rankingsData = {};
let currentMandate = 'all';
let currentCategory = 'all';
let searchQuery = '';

// Helper formatters
function formatCurrency(val) {
  return Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatDate(dateStr) {
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  setupEventListeners();
  renderApp();
});

async function loadData() {
  try {
    const [txRes, rankRes] = await Promise.all([
      fetch('data/transactions.json'),
      fetch('data/rankings.json')
    ]);
    allTransactions = await txRes.json();
    rankingsData = await rankRes.json();
  } catch (err) {
    console.error('Erro ao carregar dados do NuGov:', err);
  }
}

function setupEventListeners() {
  // Mandate switch
  document.querySelectorAll('.mandate-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.mandate-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentMandate = pill.dataset.mandate;
      renderApp();
    });
  });

  // Search input
  const searchInput = document.getElementById('feed-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTransactions();
    });
  }

  // Category pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      renderTransactions();
    });
  });

  // Pay with Taxes action button
  const payTaxBtn = document.getElementById('btn-pay-tax');
  if (payTaxBtn) {
    payTaxBtn.addEventListener('click', handlePayWithTaxes);
  }

  // Action Bar Buttons
  document.getElementById('action-categories')?.addEventListener('click', () => openModal('modal-categories'));
  document.getElementById('action-rankings')?.addEventListener('click', () => openModal('modal-rankings'));
  document.getElementById('action-calculator')?.addEventListener('click', () => openModal('modal-calculator'));
  document.getElementById('action-nubot')?.addEventListener('click', () => openModal('modal-nubot'));

  // Close modals
  document.querySelectorAll('.btn-close-modal, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      }
    });
  });

  // Citizen calculator live recalculation
  const salaryInput = document.getElementById('calc-salary-input');
  if (salaryInput) {
    salaryInput.addEventListener('input', updateCitizenCalculator);
  }

  // NuBot Form
  const nubotForm = document.getElementById('nubot-form');
  if (nubotForm) {
    nubotForm.addEventListener('submit', handleNuBotChat);
  }
}

function renderApp() {
  renderCardInfo();
  renderTransactions();
}

function renderCardInfo() {
  const mandateInfo = rankingsData.totals_by_mandate?.[currentMandate] || rankingsData.totals_by_mandate?.['all'];
  if (!mandateInfo) return;

  const holderEl = document.getElementById('card-holder-name');
  const numEl = document.getElementById('card-number-mask');
  const badgeEl = document.getElementById('card-badge-tag');
  const amountEl = document.getElementById('card-balance-val');
  const flagEl = document.getElementById('card-flag-icon');

  if (holderEl) holderEl.textContent = mandateInfo.card_holder;
  if (numEl) numEl.textContent = mandateInfo.card_number;
  if (badgeEl) badgeEl.textContent = mandateInfo.card_badge;
  if (flagEl) flagEl.textContent = mandateInfo.flag || '🇧🇷';
  
  if (amountEl) {
    const formatted = formatCurrency(mandateInfo.total_spent);
    amountEl.innerHTML = `${formatted.split(',')[0]}<span class="cents">,${formatted.split(',')[1] || '00'}</span>`;
  }
}

function renderTransactions() {
  const listEl = document.getElementById('transactions-feed');
  const countEl = document.getElementById('feed-count');
  if (!listEl) return;

  let filtered = allTransactions.filter(tx => {
    // Mandate filter
    if (currentMandate !== 'all' && tx.mandate !== currentMandate) return false;
    
    // Category filter
    if (currentCategory !== 'all' && tx.category !== currentCategory) return false;

    // Search query filter
    if (searchQuery) {
      const target = (tx.establishment + ' ' + tx.trade_name + ' ' + tx.city + ' ' + tx.description + ' ' + tx.category + ' ' + tx.mandate_label).toLowerCase();
      if (!target.includes(searchQuery)) return false;
    }

    return true;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} lançamento(s) exibido(s)`;
  }

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: 14px;">
        <span style="font-size: 32px; display: block; margin-bottom: 8px;">🔍</span>
        Nenhum gasto encontrado para os filtros selecionados.
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(tx => `
    <div class="tx-card" onclick="openTransactionModal('${tx.id}')">
      <div class="tx-left">
        <div class="tx-icon-box">
          <i class="material-symbols-outlined">${tx.category_icon || 'receipt_long'}</i>
        </div>
        <div class="tx-details">
          <h3>${escapeHtml(tx.trade_name || tx.establishment)}</h3>
          <p>
            <span>📅 ${formatDate(tx.date)}</span>
            <span>•</span>
            <span>📍 ${escapeHtml(tx.city)}</span>
            ${tx.is_classified ? '<span style="color: var(--accent-amber);">🔒 Reserva Legal</span>' : ''}
          </p>
        </div>
      </div>
      <div class="tx-right">
        <div class="tx-amount">${formatCurrency(tx.amount)}</div>
        <div class="tx-impact-badge">≈ ${tx.impact?.salario_minimo_qty || '1'} salários</div>
      </div>
    </div>
  `).join('');
}

function openTransactionModal(txId) {
  const tx = allTransactions.find(t => t.id === txId);
  if (!tx) return;

  const contentEl = document.getElementById('modal-receipt-content');
  if (!contentEl) return;

  contentEl.innerHTML = `
    <div class="receipt-sheet">
      <div class="receipt-row">
        <span class="receipt-label">Estabelecimento / Favorecido:</span>
        <span class="receipt-val">${escapeHtml(tx.establishment)}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Nome Fantasia:</span>
        <span class="receipt-val">${escapeHtml(tx.trade_name || tx.establishment)}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">CNPJ:</span>
        <span class="receipt-val">${escapeHtml(tx.cnpj)}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Localização:</span>
        <span class="receipt-val">📍 ${escapeHtml(tx.city)}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Mandato / Governo:</span>
        <span class="receipt-val">${escapeHtml(tx.mandate_label)}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Data e Hora:</span>
        <span class="receipt-val">${formatDate(tx.date)} às ${tx.time || '12:00'}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Categoria:</span>
        <span class="receipt-val">${escapeHtml(tx.category)}</span>
      </div>
      <div class="receipt-row" style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.1);">
        <span class="receipt-label">Valor Total Cobrado:</span>
        <span class="receipt-val receipt-highlight">${formatCurrency(tx.amount)}</span>
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; margin-bottom: 14px; font-size: 12px; color: var(--text-secondary);">
      <strong style="color: #fff; display: block; margin-bottom: 4px;">📝 Descrição da Despesa:</strong>
      ${escapeHtml(tx.description)}
    </div>

    ${tx.is_classified ? `
      <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 14px; font-size: 11.5px; color: #fbbf24;">
        <strong>🔒 Aviso de Segurança Nacional (Art. 24 da LAI):</strong>
        <p style="margin-top: 4px;">${escapeHtml(tx.classified_notice)}</p>
      </div>
    ` : `
      <div style="margin-bottom: 14px;">
        <a href="${tx.receipt_url}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(130, 10, 209, 0.2); border: 1px solid var(--nu-purple); color: #fff; padding: 10px; border-radius: 8px; text-decoration: none; font-size: 12px; font-weight: 700;">
          <span>📄</span> Ver Nota Fiscal Original / Documento Público (LAI)
        </a>
      </div>
    `}

    <div class="calculator-box">
      <div style="font-size: 12px; font-weight: 800; color: #fff; margin-bottom: 6px;">
        ⚖️ Calculadora de Impacto no Cidadão
      </div>
      <p style="font-size: 11.5px; color: var(--text-secondary); margin-bottom: 8px;">
        Esta única despesa equivale a aproximadamente:
      </p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; text-align: center;">
        <div style="background: rgba(0,0,0,0.4); padding: 8px; border-radius: 6px;">
          <span style="font-size: 18px; font-weight: 800; color: var(--accent-amber); display: block;">${tx.impact?.salario_minimo_qty || '0'}</span>
          <span style="font-size: 10px; color: var(--text-secondary);">Salários Mínimos</span>
        </div>
        <div style="background: rgba(0,0,0,0.4); padding: 8px; border-radius: 6px;">
          <span style="font-size: 18px; font-weight: 800; color: var(--accent-green); display: block;">${tx.impact?.cesta_basica_qty || '0'}</span>
          <span style="font-size: 10px; color: var(--text-secondary);">Cestas Básicas</span>
        </div>
      </div>
    </div>
  `;

  openModal('modal-receipt');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function handlePayWithTaxes() {
  const btn = document.getElementById('btn-pay-tax');
  if (!btn) return;

  const originalText = btn.innerHTML;
  btn.style.background = 'linear-gradient(135deg, #820ad1 0%, #4c0677 100%)';
  btn.innerHTML = '<span>⚡</span> Processando Débito Automático no seu IR...';
  btn.disabled = true;

  setTimeout(() => {
    btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    btn.innerHTML = '<span>✅</span> Fatura 100% Paga com Suor do Cidadão!';
    
    // Alerta divertido
    alert('🎉 PARABÉNS CONTRIBUINTE!\n\nSeu pagamento simbólico via Imposto de Renda, PIS, Cofins e ICMS foi debitado com sucesso.\n\nA comitiva agradece o café da manhã, o combustível e as diárias de hotel!');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 3000);
  }, 1200);
}

function updateCitizenCalculator() {
  const input = document.getElementById('calc-salary-input');
  const resEl = document.getElementById('calc-live-result');
  if (!input || !resEl) return;

  const salary = parseFloat(input.value) || 0;
  if (salary <= 0) {
    resEl.innerHTML = '<span style="color: var(--text-muted);">Digite o seu salário para calcular.</span>';
    return;
  }

  const currentTotal = rankingsData.totals_by_mandate?.[currentMandate]?.total_spent || 142780912;
  const months = (currentTotal / salary).toFixed(1);
  const years = (currentTotal / (salary * 12)).toFixed(1);

  resEl.innerHTML = `
    Para pagar a fatura de <strong>${formatCurrency(currentTotal)}</strong> com o seu salário atual de <strong>${formatCurrency(salary)}</strong>, você precisaria trabalhar:
    <div style="font-size: 16px; font-weight: 800; color: var(--accent-amber); margin-top: 6px;">
      ⏳ ${Number(months).toLocaleString('pt-BR')} meses (${Number(years).toLocaleString('pt-BR')} anos)
    </div>
  `;
}

function handleNuBotChat(e) {
  e.preventDefault();
  const input = document.getElementById('nubot-input');
  const chatBox = document.getElementById('nubot-messages');
  if (!input || !chatBox || !input.value.trim()) return;

  const userQuery = input.value.trim();
  input.value = '';

  // Append user message
  const userMsg = document.createElement('div');
  userMsg.style.cssText = 'background: rgba(130, 10, 209, 0.3); border: 1px solid var(--nu-purple); padding: 8px 12px; border-radius: 10px; margin-bottom: 8px; font-size: 12px; color: #fff; text-align: right; margin-left: 20%;';
  userMsg.textContent = userQuery;
  chatBox.appendChild(userMsg);

  // Bot response logic
  const q = userQuery.toLowerCase();
  let botReply = 'Consultei a base oficial de dados públicos. ';

  if (q.includes('padaria') || q.includes('pão') || q.includes('lanche')) {
    botReply += 'O gasto mais famoso em padarias foi de R$ 9.540,00 na Panificadora Princesa (SP) em 2021, além de compras recorrentes na Pão Dourado em Brasília durante o mandato Lula.';
  } else if (q.includes('hotel') || q.includes('hospedagem') || q.includes('viagem')) {
    botReply += 'O maior registro individual em hotelaria foi no Copacabana Palace (R$ 94.300,00 em 2007 para os Jogos Pan-Americanos) e diárias no Casa Grande Resort no Guarujá (R$ 78.920,50 em 2020).';
  } else if (q.includes('combustivel') || q.includes('gasolina') || q.includes('posto')) {
    botReply += 'O maior abastecimento simultâneo em posto de combustíveis foi de R$ 33.150,00 no Auto Posto Maracanã (RJ) em maio de 2021 para abastecer comboios de segurança e batedores.';
  } else if (q.includes('lula')) {
    botReply += 'Nos mandatos 1 e 2 (2003–2010), Lula acumulou cerca de R$ 59 milhões nominais com cartão corporativo. No mandato atual (2023–2026), os totais estão no Portal da Transparência, com detalhes sob sigilo de segurança temporário até o fim do mandato.';
  } else if (q.includes('bolsonaro')) {
    botReply += 'No mandato de Jair Bolsonaro (2019–2022), foram gastos R$ 27,6 milhões, com destaque para despesas em padarias em SP, postos de combustíveis em motociatas e hotéis no litoral paulista e catarinense.';
  } else if (q.includes('dilma')) {
    botReply += 'No mandato de Dilma Rousseff (2011–2016), foram gastos R$ 24,5 milhões, com grandes despesas em hotéis como o Transamérica SP durante a Copa de 2014 e apoio em viagens de infraestrutura.';
  } else {
    botReply += 'Você pode filtrar qualquer mandato pelos botões superiores ou pesquisar por CNPJ, cidade ou nome de estabelecimento na barra de busca do extrato!';
  }

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.style.cssText = 'background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 10px; margin-bottom: 8px; font-size: 12px; color: #e2e8f0; margin-right: 20%;';
    botMsg.innerHTML = `<strong>🤖 NuBot Presidencial:</strong><br>${botReply}`;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
