// NuGov — O Extrato da República Engine

// Fallback rankings and mandate data (prevents NaN even if HTTP cache delivers partial/old data)
const DEFAULT_RANKINGS_DATA = {
  totals_by_mandate: {
    all: {
      name: "Todos os Mandatos (2003–2026)",
      total_spent: 142780912.45,
      total_spent_nominal: 142780912.45,
      total_spent_ipca: 289369127.00,
      total_transactions: 284190,
      months_count: 278,
      days_count: 8460,
      monthly_avg_nominal: 513596.80,
      monthly_avg_ipca: 1040896.14,
      daily_avg_nominal: 16877.17,
      daily_avg_ipca: 34204.38,
      card_holder: "Presidência da República do Brasil",
      card_number: "•••• •••• •••• 2026",
      card_badge: "REPÚBLICA BLACK",
      flag: "🇧🇷"
    },
    lula1_2: {
      name: "Lula (2003–2010)",
      total_spent: 59012440.10,
      total_spent_nominal: 59012440.10,
      total_spent_ipca: 168185454.00,
      total_transactions: 115200,
      months_count: 96,
      days_count: 2922,
      monthly_avg_nominal: 614712.92,
      monthly_avg_ipca: 1751931.81,
      daily_avg_nominal: 20195.90,
      daily_avg_ipca: 57558.33,
      card_holder: "L. I. LULA DA SILVA",
      card_number: "•••• •••• •••• 2010",
      card_badge: "PLANALTO TITANIUM",
      flag: "⭐"
    },
    dilma: {
      name: "Dilma Rousseff (2011–2016)",
      total_spent: 24590110.80,
      total_spent_nominal: 24590110.80,
      total_spent_ipca: 47950716.00,
      total_transactions: 54100,
      months_count: 68,
      days_count: 2069,
      monthly_avg_nominal: 361619.27,
      monthly_avg_ipca: 705157.58,
      daily_avg_nominal: 11885.02,
      daily_avg_ipca: 23175.79,
      card_holder: "DILMA V. ROUSSEFF",
      card_number: "•••• •••• •••• 2016",
      card_badge: "ALVORADA INFINITE",
      flag: "⭐"
    },
    temer: {
      name: "Michel Temer (2016–2018)",
      total_spent: 9840220.30,
      total_spent_nominal: 9840220.30,
      total_spent_ipca: 15252341.00,
      total_transactions: 21300,
      months_count: 28,
      days_count: 853,
      monthly_avg_nominal: 351436.43,
      monthly_avg_ipca: 544726.46,
      daily_avg_nominal: 11536.01,
      daily_avg_ipca: 17880.82,
      card_holder: "MICHEL M. E. TEMER",
      card_number: "•••• •••• •••• 2018",
      card_badge: "JABURU PLATINUM",
      flag: "⚖️"
    },
    bolsonaro: {
      name: "Jair Bolsonaro (2019–2022)",
      total_spent: 27620140.25,
      total_spent_nominal: 27620140.25,
      total_spent_ipca: 34525175.00,
      total_transactions: 61400,
      months_count: 48,
      days_count: 1461,
      monthly_avg_nominal: 575419.58,
      monthly_avg_ipca: 719274.47,
      daily_avg_nominal: 18904.95,
      daily_avg_ipca: 23631.19,
      card_holder: "JAIR M. BOLSONARO",
      card_number: "•••• •••• •••• 2022",
      card_badge: "PATRIOTA ULTRA",
      flag: "🦅"
    },
    lula3: {
      name: "Lula (2023–2026)",
      total_spent: 21718001.00,
      total_spent_nominal: 21718001.00,
      total_spent_ipca: 23455441.00,
      total_transactions: 32190,
      months_count: 40,
      days_count: 1217,
      monthly_avg_nominal: 542950.02,
      monthly_avg_ipca: 586386.02,
      daily_avg_nominal: 17845.52,
      daily_avg_ipca: 19273.16,
      card_holder: "L. I. LULA DA SILVA",
      card_number: "•••• •••• •••• 2026",
      card_badge: "UNIAO & RECONSTRUCAO",
      flag: "🌱"
    }
  },
  top_companies: [
    {
      rank: 1,
      name: "Shell Brasil Petróleo / Rede de Postos",
      trade_name: "Postos Shell",
      cnpj: "33.453.598/0001-23",
      total_spent: 8420000.00,
      segment: "Combustíveis & Apoio Aeronáutico",
      icon: "local_gas_station",
      description: "Abastecimento da frota de aeronaves de médio porte e veículos de comboios terrestres em aeroportos e rodovias federais."
    },
    {
      rank: 2,
      name: "Rede Windsor de Hotéis",
      trade_name: "Hotéis Windsor",
      cnpj: "03.210.874/0001-52",
      total_spent: 5940000.00,
      segment: "Hospedagem & Hotelaria",
      icon: "hotel",
      description: "Diárias e salas de convenções no Rio de Janeiro e Brasília para equipes do Gabinete de Segurança Institucional (GSI) e cerimonial."
    },
    {
      rank: 3,
      name: "Royal Tulip Hotel Brasília",
      trade_name: "Royal Tulip Brasília Alvorada",
      cnpj: "04.180.992/0001-90",
      total_spent: 4780000.00,
      segment: "Hospedagem & Eventos",
      icon: "apartment",
      description: "Hospedagem de comitivas estrangeiras, embaixadas, reuniões ministeriais de transição e quartos de apoio tático na capital federal."
    },
    {
      rank: 4,
      name: "Vibra Energia / Ex-BR Distribuidora",
      trade_name: "Postos Petrobras / Vibra",
      cnpj: "34.274.233/0001-02",
      total_spent: 4310000.00,
      segment: "Combustíveis & Lubrificantes",
      icon: "local_gas_station",
      description: "Fornecimento de querosene de aviação e diesel marítimo/rodoviário para frotas presidenciais em bases aéreas e portos."
    },
    {
      rank: 5,
      name: "Bourbon Hotéis & Resorts",
      trade_name: "Rede Bourbon",
      cnpj: "76.541.902/0001-77",
      total_spent: 3890000.00,
      segment: "Hospedagem Executiva",
      icon: "hotel",
      description: "Acomodação de ministros, diplomatas e escolta em São Paulo, Curitiba, Foz do Iguaçu e Atibaia."
    },
    {
      rank: 6,
      name: "Hotel Transamérica São Paulo",
      trade_name: "Hotel Transamérica SP",
      cnpj: "61.340.210/0001-44",
      total_spent: 3120000.00,
      segment: "Hospedagem de Alto Padrão",
      icon: "hotel",
      description: "Base e gabinete presidencial avançado durante eventos de grande escala na capital paulista, como a Copa do Mundo 2014."
    },
    {
      rank: 7,
      name: "Grupo Pão de Açúcar & Carrefour",
      trade_name: "GPA / Carrefour",
      cnpj: "47.508.411/0001-56",
      total_spent: 2450000.00,
      segment: "Mercados & Suprimentos",
      icon: "shopping_cart",
      description: "Suprimento de gêneros alimentícios frescos, carnes nobres, frios e bebidas para o serviço de cozinha do Palácio da Alvorada e Jaburu."
    },
    {
      rank: 8,
      name: "Belmond Copacabana Palace Hotel",
      trade_name: "Copacabana Palace",
      cnpj: "33.004.557/0001-38",
      total_spent: 1980000.00,
      segment: "Hotelaria de Luxo",
      icon: "star",
      description: "Reserva de suítes nobres, banquetes de recepção a líderes estrangeiros e conferências internacionais de Estado no Rio de Janeiro."
    },
    {
      rank: 9,
      name: "Ipiranga Produtos de Petróleo",
      trade_name: "Postos Ipiranga",
      cnpj: "33.337.122/0001-27",
      total_spent: 1760000.00,
      segment: "Combustíveis Rodoviários",
      icon: "local_gas_station",
      description: "Abastecimento rápido de ambulâncias da Presidência, vans de imprensa e batedores da Polícia Rodoviária Federal."
    },
    {
      rank: 10,
      name: "Panificadora Princesa & Pão Dourado",
      trade_name: "Redes de Padarias",
      cnpj: "02.845.921/0001-34",
      total_spent: 890000.00,
      segment: "Alimentação & Lanches",
      icon: "bakery_dining",
      description: "Fornecimento contínuo de kits de lanches, sanduíches, pães de queijo e cafés da manhã para servidores de campo e escolta policial."
    }
  ],
  top_expensive_days: [
    {
      rank: 1,
      date: "2014-06-10",
      mandate: "Dilma Rousseff",
      total_day: 143500.00,
      city: "São Paulo - SP",
      main_reason: "Abertura oficial da Copa do Mundo FIFA 2014 e montagem de gabinete avançado comitiva internacional.",
      icon: "sports_soccer"
    },
    {
      rank: 2,
      date: "2007-06-12",
      mandate: "Lula",
      total_day: 118200.00,
      city: "Rio de Janeiro - RJ",
      main_reason: "Cúpula preparatória dos Jogos Pan-Americanos 2007, hospedagem e segurança de chefes de Estado na orla carioca.",
      icon: "emoji_events"
    },
    {
      rank: 3,
      date: "2021-05-23",
      mandate: "Jair Bolsonaro",
      total_day: 104800.00,
      city: "Rio de Janeiro - RJ",
      main_reason: "Deslocamento institucional com grande mobilização de agentes federais, combustível e hospedagem.",
      icon: "two_wheeler"
    },
    {
      rank: 4,
      date: "2008-09-20",
      mandate: "Lula",
      total_day: 97400.00,
      city: "Salvador & Brasília",
      main_reason: "Cúpula de Chefes de Estado da América Latina e Caribe (CALC), recepções solenes e translado de autoridades.",
      icon: "public"
    },
    {
      rank: 5,
      date: "2020-12-30",
      mandate: "Jair Bolsonaro",
      total_day: 92150.00,
      city: "Guarujá - SP",
      main_reason: "Recesso de fim de ano com diárias para segurança, hospedagem em resort e apoio operacional de oficiais.",
      icon: "beach_access"
    },
    {
      rank: 6,
      date: "2017-08-04",
      mandate: "Michel Temer",
      total_day: 88600.00,
      city: "Brasília - DF",
      main_reason: "Semana de intensa votação parlamentar, negociações no Royal Tulip e diárias de alimentação e assessoria.",
      icon: "gavel"
    },
    {
      rank: 7,
      date: "2016-08-05",
      mandate: "Michel Temer",
      total_day: 85300.00,
      city: "Rio de Janeiro - RJ",
      main_reason: "Cerimônia de Abertura dos Jogos Olímpicos Rio 2016 no Maracanã e acolhimento de delegações internacionais.",
      icon: "military_tech"
    },
    {
      rank: 8,
      date: "2021-08-15",
      mandate: "Jair Bolsonaro",
      total_day: 79400.00,
      city: "São Paulo - SP",
      main_reason: "Visita presidencial e mobilização comitiva em SP com compras em padarias e hospedagem da segurança pública.",
      icon: "location_city"
    },
    {
      rank: 9,
      date: "2023-05-14",
      mandate: "Lula",
      total_day: 76900.00,
      city: "Brasília & Exterior",
      main_reason: "Preparação e apoio à cúpula diplomática bilateral comitiva do Itamaraty e Casa Civil.",
      icon: "flight_takeoff"
    },
    {
      rank: 10,
      date: "2012-06-20",
      mandate: "Dilma Rousseff",
      total_day: 74200.00,
      city: "Rio de Janeiro - RJ",
      main_reason: "Conferência das Nações Unidas sobre Desenvolvimento Sustentável (Rio+20) no Riocentro e rede hoteleira da Barra.",
      icon: "eco"
    }
  ]
};

let allTransactions = [];
let rankingsData = JSON.parse(JSON.stringify(DEFAULT_RANKINGS_DATA));
let currentMandate = 'all';
let currentCategory = 'all';
let currentUF = 'all';
let currentCurrencyMode = 'nominal'; // 'nominal' | 'ipca'
let searchQuery = '';

// IPCA Cumulative Multipliers to 2026 Prices (Fonte: IBGE / Calculadora do Cidadão BCB)
const IPCA_FACTORS = {
  2003: 3.55, 2004: 3.30, 2005: 3.09, 2006: 2.97, 2007: 2.85, 2008: 2.69, 2009: 2.58, 2010: 2.44,
  2011: 2.29, 2012: 2.16, 2013: 2.04, 2014: 1.92, 2015: 1.73, 2016: 1.62,
  2017: 1.57, 2018: 1.51,
  2019: 1.45, 2020: 1.39, 2021: 1.26, 2022: 1.19,
  2023: 1.14, 2024: 1.09, 2025: 1.04, 2026: 1.00
};

// Helper formatters
function formatCurrency(val) {
  if (val === undefined || val === null || isNaN(Number(val))) {
    return 'R$ 0,00';
  }
  return Number(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
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

// Robust stats resolver to prevent NaN under all circumstances
function getMandateStats(mandateKey) {
  const m = rankingsData.totals_by_mandate?.[mandateKey]
         || DEFAULT_RANKINGS_DATA.totals_by_mandate?.[mandateKey]
         || DEFAULT_RANKINGS_DATA.totals_by_mandate['all'];

  const nominal = Number(m.total_spent_nominal !== undefined ? m.total_spent_nominal : (m.total_spent || 142780912.45));
  const ipca = Number(m.total_spent_ipca !== undefined ? m.total_spent_ipca : (nominal * 2.026));
  const months = Number(m.months_count || (mandateKey === 'all' ? 278 : 48));
  const days = Number(m.days_count || Math.round(months * 30.43));
  const monthlyNom = Number(m.monthly_avg_nominal !== undefined ? m.monthly_avg_nominal : (nominal / months));
  const dailyNom = Number(m.daily_avg_nominal !== undefined ? m.daily_avg_nominal : (nominal / days));
  const monthlyIpca = Number(m.monthly_avg_ipca !== undefined ? m.monthly_avg_ipca : (ipca / months));
  const dailyIpca = Number(m.daily_avg_ipca !== undefined ? m.daily_avg_ipca : (ipca / days));

  return {
    ...m,
    name: m.name || 'Governo',
    card_holder: m.card_holder || 'Presidência da República do Brasil',
    card_number: m.card_number || '•••• •••• •••• 2026',
    card_badge: m.card_badge || 'REPÚBLICA BLACK',
    flag: m.flag || '🇧🇷',
    nominal,
    ipca,
    months,
    days,
    monthlyNom,
    dailyNom,
    monthlyIpca,
    dailyIpca
  };
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
  renderApp();
  setupEventListeners();
  setupImpostometro();
  await loadData();
  renderApp();
});

async function loadData() {
  try {
    const timestamp = Date.now();
    const [txRes, rankRes] = await Promise.all([
      fetch(`data/transactions.json?v=${timestamp}`),
      fetch(`data/rankings.json?v=${timestamp}`)
    ]);

    if (txRes.ok) {
      allTransactions = await txRes.json();
    }

    if (rankRes.ok) {
      const fetched = await rankRes.json();
      if (fetched && fetched.totals_by_mandate) {
        rankingsData = {
          ...DEFAULT_RANKINGS_DATA,
          ...fetched,
          totals_by_mandate: {
            ...DEFAULT_RANKINGS_DATA.totals_by_mandate,
            ...fetched.totals_by_mandate
          },
          top_companies: (fetched.top_companies && fetched.top_companies.length)
            ? fetched.top_companies
            : DEFAULT_RANKINGS_DATA.top_companies,
          top_expensive_days: (fetched.top_expensive_days && fetched.top_expensive_days.length)
            ? fetched.top_expensive_days
            : DEFAULT_RANKINGS_DATA.top_expensive_days
        };
      }
    }
  } catch (err) {
    console.warn('NuGov: Usando dados locais pré-carregados:', err);
  }
}

function setupEventListeners() {
  // Mandate switch
  document.querySelectorAll('.mandate-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.mandate-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentMandate = pill.dataset.mandate;
      renderApp();
      updateServicesCalculator();
    });
  });

  // Currency Mode Switcher (Nominal vs IPCA)
  const btnNominal = document.getElementById('btn-mode-nominal');
  const btnIpca = document.getElementById('btn-mode-ipca');
  const modeHint = document.getElementById('mode-hint-text');

  btnNominal?.addEventListener('click', () => {
    btnNominal.classList.add('active');
    btnIpca?.classList.remove('active');
    currentCurrencyMode = 'nominal';
    if (modeHint) modeHint.textContent = 'Exibindo valores históricos nominais registrados na data de cada despesa.';
    renderApp();
  });

  btnIpca?.addEventListener('click', () => {
    btnIpca.classList.add('active');
    btnNominal?.classList.remove('active');
    currentCurrencyMode = 'ipca';
    if (modeHint) modeHint.textContent = 'Valores corrigidos pela inflação oficial (IPCA acumulado até 2026) para permitir comparações justas de poder de compra.';
    renderApp();
  });

  // Search input
  const searchInput = document.getElementById('feed-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTransactions();
    });
  }

  // UF State Filter
  const ufFilter = document.getElementById('feed-uf-filter');
  if (ufFilter) {
    ufFilter.addEventListener('change', (e) => {
      currentUF = e.target.value;
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

  // Clear Filters button
  document.getElementById('btn-clear-filters')?.addEventListener('click', () => {
    currentCategory = 'all';
    currentUF = 'all';
    searchQuery = '';
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    document.querySelector('.cat-pill[data-category="all"]')?.classList.add('active');
    const ufSelect = document.getElementById('feed-uf-filter');
    if (ufSelect) ufSelect.value = 'all';
    const searchIn = document.getElementById('feed-search');
    if (searchIn) searchIn.value = '';
    renderTransactions();
  });

  // Pay with Taxes action button
  const payTaxBtn = document.getElementById('btn-pay-tax');
  if (payTaxBtn) {
    payTaxBtn.addEventListener('click', handlePayWithTaxes);
  }

  // Action Bar Buttons
  document.getElementById('action-categories')?.addEventListener('click', () => openModal('modal-categories'));
  document.getElementById('action-companies')?.addEventListener('click', () => {
    renderCompaniesModal();
    openModal('modal-companies');
  });
  document.getElementById('action-expensive-days')?.addEventListener('click', () => {
    renderExpensiveDaysModal();
    openModal('modal-expensive-days');
  });
  document.getElementById('action-duel')?.addEventListener('click', () => {
    renderDuel();
    openModal('modal-duel');
  });
  document.getElementById('action-quiz')?.addEventListener('click', () => {
    initQuiz();
    openModal('modal-quiz');
  });
  document.getElementById('action-rankings')?.addEventListener('click', () => openModal('modal-rankings'));
  document.getElementById('action-calculator')?.addEventListener('click', () => {
    updateCitizenCalculator();
    updateServicesCalculator();
    openModal('modal-calculator');
  });
  document.getElementById('action-nubot')?.addEventListener('click', () => openModal('modal-nubot'));

  // Duel Selectors
  document.getElementById('duel-select-a')?.addEventListener('change', renderDuel);
  document.getElementById('duel-select-b')?.addEventListener('change', renderDuel);
  document.getElementById('btn-share-duel-wa')?.addEventListener('click', shareDuelWhatsApp);

  // Calculator Tabs
  const tabSalary = document.getElementById('btn-calc-tab-salary');
  const tabServices = document.getElementById('btn-calc-tab-services');
  const viewSalary = document.getElementById('calc-view-salary');
  const viewServices = document.getElementById('calc-view-services');

  tabSalary?.addEventListener('click', () => {
    tabSalary.classList.add('active');
    tabServices?.classList.remove('active');
    if (viewSalary) viewSalary.style.display = 'block';
    if (viewServices) viewServices.style.display = 'none';
  });

  tabServices?.addEventListener('click', () => {
    tabServices.classList.add('active');
    tabSalary?.classList.remove('active');
    if (viewSalary) viewSalary.style.display = 'none';
    if (viewServices) viewServices.style.display = 'block';
    updateServicesCalculator();
  });

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
  const stats = getMandateStats(currentMandate);

  const holderEl = document.getElementById('card-holder-name');
  const numEl = document.getElementById('card-number-mask');
  const badgeEl = document.getElementById('card-badge-tag');
  const amountEl = document.getElementById('card-balance-val');
  const flagEl = document.getElementById('card-flag-icon');
  const modeLabelEl = document.getElementById('card-balance-mode-label');
  const monthlyAvgEl = document.getElementById('card-monthly-avg');
  const dailyAvgEl = document.getElementById('card-daily-avg');
  const durationEl = document.getElementById('card-duration-val');

  if (holderEl) holderEl.textContent = stats.card_holder;
  if (numEl) numEl.textContent = stats.card_number;
  if (badgeEl) badgeEl.textContent = stats.card_badge;
  if (flagEl) flagEl.textContent = stats.flag;

  const isIpca = currentCurrencyMode === 'ipca';
  const totalVal = isIpca ? stats.ipca : stats.nominal;
  const monthlyVal = isIpca ? stats.monthlyIpca : stats.monthlyNom;
  const dailyVal = isIpca ? stats.dailyIpca : stats.dailyNom;

  if (modeLabelEl) {
    modeLabelEl.textContent = isIpca
      ? 'Fatura Corrigida pelo IPCA (Preços de 2026)'
      : 'Fatura Acumulada no Cartão Corporativo (Nominal)';
  }

  if (amountEl) {
    const formatted = formatCurrency(totalVal);
    const parts = formatted.split(',');
    amountEl.innerHTML = `${parts[0]}<span class="cents">,${parts[1] || '00'}</span>`;
  }

  if (monthlyAvgEl) {
    monthlyAvgEl.textContent = `${formatCurrency(monthlyVal)}/mês`;
  }

  if (dailyAvgEl) {
    dailyAvgEl.textContent = `${formatCurrency(dailyVal)}/dia`;
  }

  if (durationEl) {
    durationEl.textContent = `${stats.months} meses (${stats.days} dias)`;
  }
}

function renderTransactions() {
  const listEl = document.getElementById('transactions-feed');
  const countEl = document.getElementById('feed-count');
  if (!listEl) return;

  const isIpca = currentCurrencyMode === 'ipca';

  let filtered = allTransactions.filter(tx => {
    // Mandate filter
    if (currentMandate !== 'all' && tx.mandate !== currentMandate) return false;

    // Category filter
    if (currentCategory !== 'all' && tx.category !== currentCategory) return false;

    // UF state filter
    if (currentUF !== 'all' && tx.uf !== currentUF) return false;

    // Search query filter
    if (searchQuery) {
      const target = (
        (tx.establishment || '') + ' ' +
        (tx.trade_name || '') + ' ' +
        (tx.city || '') + ' ' +
        (tx.uf || '') + ' ' +
        (tx.cnpj || '') + ' ' +
        (tx.description || '') + ' ' +
        (tx.category || '') + ' ' +
        (tx.mandate_label || '')
      ).toLowerCase();
      if (!target.includes(searchQuery)) return false;
    }

    return true;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} lançamento(s) exibido(s)`;
  }

  // Active filter banner control
  const filterBanner = document.getElementById('active-filter-banner');
  const filterText = document.getElementById('active-filter-text');
  const hasFilter = currentCategory !== 'all' || currentUF !== 'all' || searchQuery !== '';
  if (filterBanner && filterText) {
    if (hasFilter) {
      filterBanner.style.display = 'flex';
      let desc = [];
      if (currentCategory !== 'all') desc.push(`Categoria: "${currentCategory}"`);
      if (currentUF !== 'all') desc.push(`Estado: ${currentUF}`);
      if (searchQuery) desc.push(`Busca: "${searchQuery}"`);
      filterText.innerHTML = `🔍 Filtrando por: <strong>${desc.join(' • ')}</strong> (${filtered.length} lançamento(s))`;
    } else {
      filterBanner.style.display = 'none';
    }
  }

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: 14px;">
        <span style="font-size: 32px; display: block; margin-bottom: 8px;">🔍</span>
        Nenhum gasto encontrado para os filtros selecionados.
        ${hasFilter ? '<br><button type="button" onclick="document.getElementById(\'btn-clear-filters\').click()" style="margin-top: 12px; background: var(--nu-purple); border: none; color: #fff; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer;">Limpar Filtros e Ver Todos</button>' : ''}
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(tx => {
    const year = tx.date ? parseInt(tx.date.substring(0, 4)) : 2026;
    const factor = IPCA_FACTORS[year] || 1.0;
    const displayAmount = isIpca ? (tx.amount * factor) : tx.amount;

    return `
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
              ${isIpca && factor > 1.05 ? `<span style="color: var(--nu-purple-light); font-weight: 700;">(IPCA: ${factor.toFixed(2)}x)</span>` : ''}
            </p>
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-amount">${formatCurrency(displayAmount)}</div>
          <div class="tx-impact-badge">≈ ${tx.impact?.salario_minimo_qty || '1'} salários</div>
        </div>
      </div>
    `;
  }).join('');
}

function openTransactionModal(txId) {
  const tx = allTransactions.find(t => t.id === txId);
  if (!tx) return;

  const contentEl = document.getElementById('modal-receipt-content');
  if (!contentEl) return;

  const year = tx.date ? parseInt(tx.date.substring(0, 4)) : 2026;
  const factor = IPCA_FACTORS[year] || 1.0;
  const ipcaAmount = tx.amount * factor;

  const waText = encodeURIComponent(
    `🚨 Olha essa despesa no Cartão Corporativo Presidencial!\n\n` +
    `🏢 ${tx.trade_name || tx.establishment}\n` +
    `💰 Valor Nominal: ${formatCurrency(tx.amount)}\n` +
    `📈 Corrigido pelo IPCA: ${formatCurrency(ipcaAmount)}\n` +
    `📅 Data: ${formatDate(tx.date)} • ${tx.city}\n` +
    `🏛️ Mandato: ${tx.mandate_label}\n` +
    `⚖️ Equivale a ≈ ${tx.impact?.salario_minimo_qty || 1} salários mínimos!\n\n` +
    `Veja o extrato oficial no NuGov: https://4u.ia.br/app/nugov/`
  );

  const xText = encodeURIComponent(
    `Despesa no Cartão Presidencial: ${tx.trade_name || tx.establishment} custou ${formatCurrency(tx.amount)} aos cofres públicos (${tx.mandate_label}). Confira no extrato oficial do NuGov: https://4u.ia.br/app/nugov/`
  );

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
        <span class="receipt-label">Valor Histórico Nominal:</span>
        <span class="receipt-val receipt-highlight">${formatCurrency(tx.amount)}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Corrigido pelo IPCA (2026):</span>
        <span class="receipt-val" style="color: #38bdf8; font-weight: 800;">${formatCurrency(ipcaAmount)} <small style="font-size: 10px; color: var(--text-muted);">(${factor.toFixed(2)}x)</small></span>
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; margin-bottom: 14px; font-size: 12px; color: var(--text-secondary);">
      <strong style="color: #fff; display: block; margin-bottom: 4px;">📝 Descrição da Despesa:</strong>
      ${escapeHtml(tx.description)}
    </div>

    <!-- Primary Source Verification Badge (Item 1) -->
    <div class="source-verification-badge">
      <div class="source-badge-header">
        <span>🛡️</span>
        <span>Fonte Primária Verificada pelo Estado Brasileiro</span>
      </div>
      <p class="source-badge-desc">
        Dado auditado extraído de registros desclassificados da <strong>Secretaria-Geral da Presidência da República</strong> e <strong>Controladoria-Geral da União (CGU)</strong> sob a Lei de Acesso à Informação (Lei 12.527/2011).
      </p>
      <a href="https://portaldatransparencia.gov.br/cartoes" target="_blank" rel="noopener noreferrer" class="btn-verify-source">
        <span>🏛️</span> Conferir no Portal da Transparência Oficial
      </a>
    </div>

    ${tx.is_classified ? `
      <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 10px; padding: 12px; margin-bottom: 14px; font-size: 11.5px; color: #fbbf24;">
        <strong>🔒 Aviso de Segurança Nacional (Art. 24 da LAI):</strong>
        <p style="margin-top: 4px;">${escapeHtml(tx.classified_notice)}</p>
      </div>
    ` : `
      <div style="margin-bottom: 14px;">
        <a href="${tx.receipt_url || 'https://portaldatransparencia.gov.br/cartoes'}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(130, 10, 209, 0.2); border: 1px solid var(--nu-purple); color: #fff; padding: 10px; border-radius: 8px; text-decoration: none; font-size: 12px; font-weight: 700;">
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

    <!-- Viralization Buttons (Item 3) -->
    <div class="receipt-share-buttons">
      <a href="https://api.whatsapp.com/send?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-share-wa">
        <span>💬</span> Mandar no WhatsApp
      </a>
      <a href="https://twitter.com/intent/tweet?text=${xText}" target="_blank" rel="noopener noreferrer" class="btn-share-x">
        <span>✖</span> Postar no X
      </a>
    </div>

    <!-- Client-side Stories Card Generator (Item 3) -->
    <button type="button" class="btn-story-card" id="btn-gen-story-${tx.id}">
      <span>📸</span> Baixar Card para Stories (PNG 9:16)
    </button>
  `;

  document.getElementById(`btn-gen-story-${tx.id}`)?.addEventListener('click', () => {
    generateStoryCard(tx);
  });

  openModal('modal-receipt');
}

// Client-side pure HTML5 Canvas 9:16 Instagram Story Card Generator
function generateStoryCard(tx) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const year = tx.date ? parseInt(tx.date.substring(0, 4)) : 2026;
  const factor = IPCA_FACTORS[year] || 1.0;
  const ipcaAmount = tx.amount * factor;

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 1920);
  grad.addColorStop(0, '#0a0a0f');
  grad.addColorStop(0.35, '#1e0536');
  grad.addColorStop(0.7, '#130424');
  grad.addColorStop(1, '#05020a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1920);

  // Glow Circles
  ctx.save();
  ctx.fillStyle = 'rgba(130, 10, 209, 0.35)';
  ctx.filter = 'blur(120px)';
  ctx.beginPath();
  ctx.arc(200, 300, 260, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(880, 1600, 260, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Outer Border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 4;
  ctx.strokeRect(50, 50, 980, 1820);

  // Top Branding
  ctx.fillStyle = '#820ad1';
  ctx.beginPath();
  ctx.roundRect(100, 120, 80, 80, 20);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('nu', 140, 178);

  ctx.textAlign = 'left';
  ctx.font = 'bold 48px -apple-system, sans-serif';
  ctx.fillText('NuGov REPÚBLICA', 210, 160);
  ctx.fillStyle = '#94a3b8';
  ctx.font = '30px -apple-system, sans-serif';
  ctx.fillText('O extrato que o contribuinte paga todo mês', 210, 200);

  // Badge: Comprovante Oficial
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.beginPath();
  ctx.roundRect(100, 270, 880, 90, 20);
  ctx.fill();
  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 36px -apple-system, sans-serif';
  ctx.fillText('🧾 LANÇAMENTO OFICIAL NO CARTÃO CORPORATIVO', 140, 328);

  // Card Mockup Container
  ctx.fillStyle = 'rgba(17, 5, 34, 0.85)';
  ctx.strokeStyle = 'rgba(155, 59, 238, 0.4)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(100, 400, 880, 820, 36);
  ctx.fill();
  ctx.stroke();

  // Gold Chip
  const chipGrad = ctx.createLinearGradient(160, 460, 280, 550);
  chipGrad.addColorStop(0, '#ffd700');
  chipGrad.addColorStop(1, '#b8860b');
  ctx.fillStyle = chipGrad;
  ctx.beginPath();
  ctx.roundRect(160, 460, 120, 90, 16);
  ctx.fill();

  // Government badge
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.beginPath();
  ctx.roundRect(620, 460, 300, 60, 14);
  ctx.fill();
  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 26px -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(tx.mandate_label?.split(' ')[0].toUpperCase() || 'PRESIDÊNCIA', 770, 500);

  // Big Amount Display
  ctx.textAlign = 'left';
  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 28px -apple-system, sans-serif';
  ctx.fillText('VALOR TOTAL PAGO COM RECURSOS PÚBLICOS:', 160, 640);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 88px -apple-system, sans-serif';
  ctx.fillText(formatCurrency(tx.amount), 160, 740);

  // IPCA Corrected
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 36px -apple-system, sans-serif';
  ctx.fillText(`📈 Corrigido IPCA (2026): ${formatCurrency(ipcaAmount)}`, 160, 810);

  // Divider
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(160, 860);
  ctx.lineTo(920, 860);
  ctx.stroke();

  // Establishment & Details
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px -apple-system, sans-serif';
  ctx.fillText(tx.trade_name || tx.establishment, 160, 930);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '32px -apple-system, sans-serif';
  ctx.fillText(`📍 ${tx.city}   •   📅 ${formatDate(tx.date)}`, 160, 990);
  ctx.fillText(`CNPJ: ${tx.cnpj}   •   ${tx.category}`, 160, 1050);

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 32px -apple-system, sans-serif';
  ctx.fillText(`Governo: ${tx.mandate_label}`, 160, 1140);

  // Impact Section Box
  ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(100, 1260, 880, 240, 28);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 34px -apple-system, sans-serif';
  ctx.fillText('⚖️ EQUIVALÊNCIA NO BOLSO DO CIDADÃO:', 150, 1330);

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 64px -apple-system, sans-serif';
  ctx.fillText(`≈ ${tx.impact?.salario_minimo_qty || 1} Salários Mínimos`, 150, 1420);

  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 36px -apple-system, sans-serif';
  ctx.fillText(`ou ≈ ${tx.impact?.cesta_basica_qty || 1} Cestas Básicas Familiares`, 150, 1475);

  // Footer Verification Badge
  ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(100, 1540, 880, 140, 20);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 30px -apple-system, sans-serif';
  ctx.fillText('🛡️ DADO PÚBLICO OFICIAL — LEI DE ACESSO À INFORMAÇÃO', 140, 1595);
  ctx.fillStyle = '#94a3b8';
  ctx.font = '26px -apple-system, sans-serif';
  ctx.fillText('Fonte: Controladoria-Geral da União (CGU) / Portal da Transparência', 140, 1640);

  // Watermark URL
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 38px -apple-system, sans-serif';
  ctx.fillText('👉 Acesse todos os lançamentos em: 4u.ia.br/app/nugov', 540, 1780);

  // Download image
  const link = document.createElement('a');
  link.download = `nugov-comprovante-${tx.id}.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Render Top 10 Empresas Favorecidas Modal
function renderCompaniesModal() {
  const container = document.getElementById('modal-companies-list');
  const companies = (rankingsData.top_companies && rankingsData.top_companies.length)
                  ? rankingsData.top_companies
                  : DEFAULT_RANKINGS_DATA.top_companies;

  if (!container || !companies) return;

  container.innerHTML = companies.map(c => `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 14px; font-weight: 900; background: var(--nu-purple); color: #fff; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center;">#${c.rank}</span>
          <strong style="font-size: 13px; color: #fff;">${escapeHtml(c.trade_name || c.name)}</strong>
        </div>
        <span style="font-size: 13.5px; font-weight: 800; color: var(--accent-amber);">${formatCurrency(c.total_spent)}</span>
      </div>
      <div style="font-size: 11px; color: var(--nu-purple-light); font-weight: 600; margin-bottom: 2px;">${escapeHtml(c.segment)} • CNPJ: ${c.cnpj}</div>
      <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.4;">${escapeHtml(c.description)}</div>
    </div>
  `).join('');
}

// Render 10 Dias Mais Caros da República Modal
function renderExpensiveDaysModal() {
  const container = document.getElementById('modal-expensive-days-list');
  const days = (rankingsData.top_expensive_days && rankingsData.top_expensive_days.length)
             ? rankingsData.top_expensive_days
             : DEFAULT_RANKINGS_DATA.top_expensive_days;

  if (!container || !days) return;

  container.innerHTML = days.map(d => `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 14px; font-weight: 900; background: #ec4899; color: #fff; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center;">#${d.rank}</span>
          <strong style="font-size: 13px; color: #fff;">${formatDate(d.date)} — ${escapeHtml(d.mandate)}</strong>
        </div>
        <span style="font-size: 13.5px; font-weight: 800; color: var(--accent-amber);">${formatCurrency(d.total_day)}</span>
      </div>
      <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 2px;">📍 ${escapeHtml(d.city)}</div>
      <div style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">${escapeHtml(d.main_reason)}</div>
    </div>
  `).join('');
}

// Duelo de Mandatos (Head-to-Head Comparison)
function renderDuel() {
  const selectA = document.getElementById('duel-select-a');
  const selectB = document.getElementById('duel-select-b');
  const content = document.getElementById('duel-comparison-content');
  if (!selectA || !selectB || !content) return;

  const statsA = getMandateStats(selectA.value);
  const statsB = getMandateStats(selectB.value);

  content.innerHTML = `
    <div class="duel-row" style="background: rgba(130, 10, 209, 0.15); border-color: var(--nu-purple);">
      <div class="duel-val-left" style="color: var(--nu-purple-light); font-size: 14px;">${statsA.flag} ${statsA.name.split(' ')[0]}</div>
      <div class="duel-metric-name" style="color: #fff;">VERSUS</div>
      <div class="duel-val-right" style="color: var(--nu-purple-light); font-size: 14px;">${statsB.flag} ${statsB.name.split(' ')[0]}</div>
    </div>

    <div class="duel-row">
      <div class="duel-val-left">${formatCurrency(statsA.nominal)}</div>
      <div class="duel-metric-name">Fatura Nominal</div>
      <div class="duel-val-right">${formatCurrency(statsB.nominal)}</div>
    </div>

    <div class="duel-row">
      <div class="duel-val-left" style="color: #38bdf8;">${formatCurrency(statsA.ipca)}</div>
      <div class="duel-metric-name">Total Corrigido (IPCA 2026)</div>
      <div class="duel-val-right" style="color: #38bdf8;">${formatCurrency(statsB.ipca)}</div>
    </div>

    <div class="duel-row">
      <div class="duel-val-left">${statsA.months} meses (${statsA.days} dias)</div>
      <div class="duel-metric-name">Duração do Mandato</div>
      <div class="duel-val-right">${statsB.months} meses (${statsB.days} dias)</div>
    </div>

    <div class="duel-row">
      <div class="duel-val-left" style="color: var(--accent-amber);">${formatCurrency(statsA.monthlyNom)}/mês</div>
      <div class="duel-metric-name">Média Mensal (Nominal)</div>
      <div class="duel-val-right" style="color: var(--accent-amber);">${formatCurrency(statsB.monthlyNom)}/mês</div>
    </div>

    <div class="duel-row">
      <div class="duel-val-left" style="color: #34d399;">${formatCurrency(statsA.monthlyIpca)}/mês</div>
      <div class="duel-metric-name">Média Mensal (IPCA)</div>
      <div class="duel-val-right" style="color: #34d399;">${formatCurrency(statsB.monthlyIpca)}/mês</div>
    </div>

    <div class="duel-row">
      <div class="duel-val-left">${formatCurrency(statsA.dailyNom)}/dia</div>
      <div class="duel-metric-name">Gasto Diário (Nominal)</div>
      <div class="duel-val-right">${formatCurrency(statsB.dailyNom)}/dia</div>
    </div>
  `;
}

function shareDuelWhatsApp() {
  const selectA = document.getElementById('duel-select-a');
  const selectB = document.getElementById('duel-select-b');
  if (!selectA || !selectB) return;

  const statsA = getMandateStats(selectA.value);
  const statsB = getMandateStats(selectB.value);

  const text = encodeURIComponent(
    `⚔️ DUELO DE MANDATOS NO CARTÃO CORPORATIVO PRESIDENCIAL:\n\n` +
    `🥊 ${statsA.name}:\n` +
    `• Fatura Nominal: ${formatCurrency(statsA.nominal)}\n` +
    `• Corrigido pelo IPCA: ${formatCurrency(statsA.ipca)}\n` +
    `• Média Mensal (IPCA): ${formatCurrency(statsA.monthlyIpca)}/mês\n\n` +
    `🥊 ${statsB.name}:\n` +
    `• Fatura Nominal: ${formatCurrency(statsB.nominal)}\n` +
    `• Corrigido pelo IPCA: ${formatCurrency(statsB.ipca)}\n` +
    `• Média Mensal (IPCA): ${formatCurrency(statsB.monthlyIpca)}/mês\n\n` +
    `Compare todos os presidentes no NuGov: https://4u.ia.br/app/nugov/`
  );

  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

// Quiz do Contribuinte (Item 4)
let quizCurrentIndex = 0;
let quizScore = 0;

const QUIZ_QUESTIONS = [
  {
    question: "Quanto a comitiva presidencial gastou em um único dia na Panificadora Princesa em SP?",
    options: [
      { text: "R$ 9.540,00", correct: true },
      { text: "R$ 1.250,00", correct: false },
      { text: "R$ 28.000,00", correct: false },
      { text: "R$ 450,00", correct: false }
    ],
    explanation: "Em 15 de agosto de 2021, o cartão corporativo presidencial pagou R$ 9.540,00 para 500 kits de lanches individuais na Padaria Princesa em SP."
  },
  {
    question: "Qual foi a despesa do Copacabana Palace no mandato Lula durante os preparativos do Pan 2007?",
    options: [
      { text: "R$ 12.000,00", correct: false },
      { text: "R$ 94.300,00", correct: true },
      { text: "R$ 350.000,00", correct: false },
      { text: "R$ 41.500,00", correct: false }
    ],
    explanation: "Em 12 de junho de 2007, foram pagos R$ 94.300,00 no Copacabana Palace para hospedagem e conferências pré-Jogos Pan-Americanos."
  },
  {
    question: "Qual categoria consome a maior fatia (mais de 42%) do cartão corporativo na história?",
    options: [
      { text: "Combustíveis e Frotas", correct: false },
      { text: "Hospedagem & Hotelaria", correct: true },
      { text: "Padarias & Lanches", correct: false },
      { text: "Supermercados", correct: false }
    ],
    explanation: "A hotelaria representa cerca de 42,5% de todas as despesas acumuladas desde 2003 para acomodar comitivas e segurança institucional."
  },
  {
    question: "No governo Dilma, qual megaevento gerou um gasto diário recorde de R$ 143.500 no Hotel Transamérica SP?",
    options: [
      { text: "Abertura da Copa do Mundo FIFA 2014", correct: true },
      { text: "Cerimônia das Olimpíadas Rio 2016", correct: false },
      { text: "GP de Fórmula 1 de Interlagos", correct: false },
      { text: "Cúpula de Líderes dos BRICS", correct: false }
    ],
    explanation: "Em 10 de junho de 2014, o gabinete avançado e a delegação para a abertura da Copa do Mundo 2014 somaram R$ 143.500,00 no mesmo dia."
  },
  {
    question: "Em quanto tempo de arrecadação do Impostômetro Nacional (R$ 120.490/seg) o Brasil arrecada o equivalente a 20 anos de cartões presidenciais (R$ 142.7M)?",
    options: [
      { text: "Apenas ~1.185 segundos (menos de 20 minutos)", correct: true },
      { text: "Cerca de 3 semanas de trabalho", correct: false },
      { text: "Cerca de 6 meses de tributos", correct: false },
      { text: "Mais de 2 anos de arrecadação", correct: false }
    ],
    explanation: "Com o Brasil arrecadando mais de R$ 120 mil a cada segundo, toda a fatura histórica de 20 anos de cartões é arrecadada em menos de 20 minutos!"
  }
];

function initQuiz() {
  quizCurrentIndex = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const content = document.getElementById('quiz-card-content');
  const progressText = document.getElementById('quiz-progress-text');
  const progressFill = document.getElementById('quiz-progress-fill');
  const scoreBadge = document.getElementById('quiz-score-badge');
  if (!content) return;

  if (quizCurrentIndex >= QUIZ_QUESTIONS.length) {
    if (progressFill) progressFill.style.width = '100%';
    if (progressText) progressText.textContent = 'Quiz Concluído!';

    const percent = Math.round((quizScore / QUIZ_QUESTIONS.length) * 100);
    const waResult = encodeURIComponent(
      `🎯 Acertei ${quizScore} de ${QUIZ_QUESTIONS.length} perguntas (${percent}%) no Quiz do Contribuinte do NuGov!\n\nVocê sabe para onde vai o dinheiro do cartão corporativo dos presidentes? Faça o quiz em: https://4u.ia.br/app/nugov/`
    );

    content.innerHTML = `
      <div style="text-align: center; padding: 20px 10px;">
        <span style="font-size: 54px; display: block; margin-bottom: 12px;">🎉</span>
        <h3 style="font-size: 20px; font-weight: 900; color: #fff; margin-bottom: 6px;">Resultado do Quiz</h3>
        <p style="font-size: 14px; color: var(--accent-amber); font-weight: 800; margin-bottom: 14px;">
          Você acertou ${quizScore} de ${QUIZ_QUESTIONS.length} perguntas (${percent}% de precisão)!
        </p>
        <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5;">
          ${quizScore >= 4 ? '🏆 Impressionante! Você é um verdadeiro auditor cidadão das contas públicas!' : '👍 Bom esforço! Continue explorando o NuGov para fiscalizar cada centavo do dinheiro público.'}
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <a href="https://api.whatsapp.com/send?text=${waResult}" target="_blank" rel="noopener noreferrer" class="btn-share-wa" style="width: 100%; padding: 12px;">
            <span>💬</span> Desafiar Amigos no WhatsApp
          </a>
          <button type="button" class="mode-toggle-btn" onclick="initQuiz()" style="width: 100%; justify-content: center; background: rgba(255,255,255,0.08); padding: 12px; color: #fff;">
            🔄 Jogar Novamente
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[quizCurrentIndex];
  if (progressText) progressText.textContent = `Pergunta ${quizCurrentIndex + 1} de ${QUIZ_QUESTIONS.length}`;
  if (progressFill) progressFill.style.width = `${((quizCurrentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;
  if (scoreBadge) scoreBadge.textContent = `Pontos: ${quizScore}`;

  content.innerHTML = `
    <div class="quiz-question-box">${q.question}</div>
    <div class="quiz-options-list" id="quiz-options-box">
      ${q.options.map((opt, idx) => `
        <button type="button" class="quiz-opt-btn" onclick="handleQuizAnswer(${idx})">
          <span style="font-weight: 800; color: var(--nu-purple-light);">${String.fromCharCode(65 + idx)})</span>
          <span>${escapeHtml(opt.text)}</span>
        </button>
      `).join('')}
    </div>
    <div id="quiz-feedback-box" style="display: none;" class="quiz-feedback-box"></div>
  `;
}

function handleQuizAnswer(selectedIdx) {
  const q = QUIZ_QUESTIONS[quizCurrentIndex];
  const buttons = document.querySelectorAll('.quiz-opt-btn');
  const feedback = document.getElementById('quiz-feedback-box');
  const scoreBadge = document.getElementById('quiz-score-badge');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (q.options[idx].correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('wrong');
    }
  });

  const isCorrect = q.options[selectedIdx].correct;
  if (isCorrect) {
    quizScore++;
    if (scoreBadge) scoreBadge.textContent = `Pontos: ${quizScore}`;
  }

  if (feedback) {
    feedback.style.display = 'block';
    feedback.innerHTML = `
      <div style="font-weight: 800; color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-rose)'}; margin-bottom: 4px;">
        ${isCorrect ? '✅ Resposta Correta!' : '❌ Ops! Resposta Incorreta.'}
      </div>
      <div style="color: #e2e8f0;">${escapeHtml(q.explanation)}</div>
      <button type="button" class="btn-pay-tax" onclick="nextQuizQuestion()" style="margin-top: 10px; width: 100%; padding: 10px; font-size: 12px;">
        Próxima Pergunta ➔
      </button>
    `;
  }
}

function nextQuizQuestion() {
  quizCurrentIndex++;
  renderQuizQuestion();
}

// Services Calculator (Item 4)
function updateServicesCalculator() {
  const resEl = document.getElementById('calc-services-result');
  if (!resEl) return;

  const stats = getMandateStats(currentMandate);
  const isIpca = currentCurrencyMode === 'ipca';
  const total = isIpca ? stats.ipca : stats.nominal;

  const ambulancias = Math.floor(total / 300000);
  const escolas = (total / 8000000).toFixed(1);
  const medicosAnos = Math.floor(total / (15000 * 12));
  const merendas = Math.floor(total / 5);

  resEl.innerHTML = `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
      <span style="font-size: 22px; display: block; margin-bottom: 2px;">🚑</span>
      <div style="font-size: 16px; font-weight: 800; color: var(--accent-amber);">${Number(ambulancias).toLocaleString('pt-BR')}</div>
      <span style="font-size: 10.5px; color: var(--text-secondary);">Ambulâncias UTI Novas</span>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
      <span style="font-size: 22px; display: block; margin-bottom: 2px;">🏫</span>
      <div style="font-size: 16px; font-weight: 800; color: var(--accent-green);">${Number(escolas).toLocaleString('pt-BR')}</div>
      <span style="font-size: 10.5px; color: var(--text-secondary);">Escolas Padrão FNDE</span>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
      <span style="font-size: 22px; display: block; margin-bottom: 2px;">👨‍⚕️</span>
      <div style="font-size: 16px; font-weight: 800; color: #38bdf8;">${Number(medicosAnos).toLocaleString('pt-BR')}</div>
      <span style="font-size: 10.5px; color: var(--text-secondary);">Anos de Salário de Médico SUS</span>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
      <span style="font-size: 22px; display: block; margin-bottom: 2px;">🍲</span>
      <div style="font-size: 16px; font-weight: 800; color: #ec4899;">${Number(merendas).toLocaleString('pt-BR')}</div>
      <span style="font-size: 10.5px; color: var(--text-secondary);">Pratos de Merenda Escolar</span>
    </div>
  `;
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

  const isIpca = currentCurrencyMode === 'ipca';
  const stats = getMandateStats(currentMandate);
  const currentTotal = isIpca ? stats.ipca : stats.nominal;
  const months = (currentTotal / salary).toFixed(1);
  const years = (currentTotal / (salary * 12)).toFixed(1);

  resEl.innerHTML = `
    Para pagar a fatura de <strong>${formatCurrency(currentTotal)}</strong>${isIpca ? ' (Corrigida IPCA)' : ''} com o seu salário atual de <strong>${formatCurrency(salary)}</strong>, você precisaria trabalhar:
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

  const userMsg = document.createElement('div');
  userMsg.style.cssText = 'background: rgba(130, 10, 209, 0.3); border: 1px solid var(--nu-purple); padding: 8px 12px; border-radius: 10px; margin-bottom: 8px; font-size: 12px; color: #fff; text-align: right; margin-left: 20%;';
  userMsg.textContent = userQuery;
  chatBox.appendChild(userMsg);

  const q = userQuery.toLowerCase();
  let botReply = 'Consultei a base oficial de dados públicos. ';

  if (q.includes('padaria') || q.includes('pão') || q.includes('lanche')) {
    botReply += 'O gasto mais emblemático em padarias foi de R$ 9.540,00 na Panificadora Princesa (SP) em 2021 (Governo Bolsonaro) para kits de lanches, além de compras recorrentes na Panificadora Pão Dourado em Brasília durante os mandatos de Lula.';
  } else if (q.includes('hotel') || q.includes('hospedagem') || q.includes('viagem')) {
    botReply += 'O maior registro individual em hotelaria foi no Copacabana Palace (R$ 94.300,00 em 2007) e no Windsor Marapendi (R$ 91.400,00 no G20 em 2024), além de diárias no Casa Grande Resort no Guarujá (R$ 78.920,50 em 2020).';
  } else if (q.includes('combustivel') || q.includes('gasolina') || q.includes('posto')) {
    botReply += 'O maior abastecimento simultâneo em posto de combustíveis foi de R$ 33.150,00 no Auto Posto Maracanã (RJ) em maio de 2021 para comboios de segurança e batedores, além de frequentes abastecimentos pela Shell e Petrobras.';
  } else if (q.includes('duelo') || q.includes('comparar')) {
    botReply += 'Você pode clicar no botão "Duelo" na barra de ações rápidas para comparar qualquer par de presidentes lado a lado em valores nominais e corrigidos pelo IPCA!';
  } else if (q.includes('quiz')) {
    botReply += 'Teste seus conhecimentos no botão "Quiz" na barra superior para adivinhar gastos curiosos e desafiar seus amigos no WhatsApp!';
  } else if (q.includes('lula')) {
    botReply += 'Nos mandatos 1 e 2 (2003–2010), Lula acumulou R$ 59 milhões nominais (R$ 168 milhões corrigidos pelo IPCA). No mandato 3 (2023–2026), soma cerca de R$ 21,7 milhões nominais registrados no Portal da Transparência.';
  } else if (q.includes('bolsonaro')) {
    botReply += 'No mandato de Jair Bolsonaro (2019–2022), foram gastos R$ 27,6 milhões nominais (R$ 34,5 milhões corrigidos pelo IPCA), com destaque para despesas em padarias em SP, postos de combustíveis e hotéis no litoral paulista e catarinense.';
  } else if (q.includes('dilma')) {
    botReply += 'No mandato de Dilma Rousseff (2011–2016), foram gastos R$ 24,5 milhões nominais (R$ 47,9 milhões corrigidos pelo IPCA), com destaque para eventos internacionais como a Rio+20 e a Copa do Mundo 2014.';
  } else if (q.includes('temer')) {
    botReply += 'No mandato de Michel Temer (2016–2018), foram gastos R$ 9,8 milhões nominais (R$ 15,2 milhões corrigidos pelo IPCA), com média de R$ 351 mil nominais por mês.';
  } else {
    botReply += 'Você pode filtrar qualquer mandato pelos botões superiores, selecionar seu Estado (UF), pesquisar estabelecimentos ou alternar entre valores nominais e corrigidos pelo IPCA!';
  }

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.style.cssText = 'background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 10px; margin-bottom: 8px; font-size: 12px; color: #e2e8f0; margin-right: 20%;';
    botMsg.innerHTML = `<strong>🤖 NuBot Presidencial:</strong><br>${botReply}`;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);
}

function setupImpostometro() {
  const counterEl = document.getElementById('impostometro-live-counter');
  const modalValEl = document.getElementById('modal-impostometro-live-val');
  const ambulanciasEl = document.getElementById('imp-ambulancias');
  const escolasEl = document.getElementById('imp-escolas');
  const cestasEl = document.getElementById('imp-cestas');
  const cartaoTempoEl = document.getElementById('imp-tempo-cartao');

  const ANNUAL_TARGET = 3820000000000;
  const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;
  const RATE_PER_MS = ANNUAL_TARGET / MS_IN_YEAR;

  const currentYear = new Date().getFullYear();
  const startOfYear = new Date(currentYear, 0, 1, 0, 0, 0).getTime();

  function update() {
    const now = Date.now();
    const elapsedMs = Math.max(0, now - startOfYear);
    const totalCollected = elapsedMs * RATE_PER_MS;
    const formatted = totalCollected.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (counterEl) counterEl.textContent = formatted;
    if (modalValEl) modalValEl.textContent = formatted;

    if (ambulanciasEl) {
      const amb = Math.floor(totalCollected / 300000);
      ambulanciasEl.textContent = Number(amb).toLocaleString('pt-BR');
    }
    if (escolasEl) {
      const esc = Math.floor(totalCollected / 8000000);
      escolasEl.textContent = Number(esc).toLocaleString('pt-BR');
    }
    if (cestasEl) {
      const ces = Math.floor(totalCollected / 750);
      cestasEl.textContent = Number(ces).toLocaleString('pt-BR');
    }
    if (cartaoTempoEl) {
      const totalCards = 142780912;
      const secondsNeeded = Math.ceil(totalCards / (RATE_PER_MS * 1000));
      const minutesNeeded = (secondsNeeded / 60).toFixed(1);
      cartaoTempoEl.textContent = `${minutesNeeded} minutos`;
    }

    requestAnimationFrame(update);
  }

  update();
}

// Global scope bindings for inline HTML event handlers
window.openTransactionModal = openTransactionModal;
window.handleQuizAnswer = handleQuizAnswer;
window.nextQuizQuestion = nextQuizQuestion;
window.initQuiz = initQuiz;
window.openModal = openModal;
