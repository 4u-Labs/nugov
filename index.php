<?php
// NuGov — O Extrato da República
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>NuGov — O Extrato da República</title>
  <meta name="description" content="O extrato interativo do cartão corporativo presidencial brasileiro. Transparência pública em formato fintech.">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#820ad1">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🟣</text></svg>">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
  <link rel="stylesheet" href="assets/css/nugov.css">
</head>
<body>
  <div class="bg-glow-mesh"></div>

  <!-- Header -->
  <header class="nugov-header">
    <div class="container">
      <div class="header-content">
        <a href="index.php" class="brand-area">
          <div class="brand-logo-badge">nu</div>
          <div class="brand-titles">
            <h1>NuGov <span>REPÚBLICA</span></h1>
            <p>O extrato que o contribuinte paga todo mês</p>
          </div>
        </a>
        <div class="header-actions">
          <button id="btn-pwa-install" class="btn-header-install" type="button">
            <span class="material-symbols-outlined" style="font-size: 16px;">install_mobile</span>
            Instalar App
          </button>
          <button class="btn-icon-header" type="button" onclick="openModal('modal-nubot')" title="Conversar com o NuBot">
            <span class="material-symbols-outlined" style="font-size: 20px;">smart_toy</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- Mandates Filter Carousel -->
    <div class="mandate-pill-bar">
      <button class="mandate-pill active" data-mandate="all">🇧🇷 Todos os Mandatos</button>
      <button class="mandate-pill" data-mandate="lula3">🌱 Lula (2023–2026)</button>
      <button class="mandate-pill" data-mandate="bolsonaro">🦅 Bolsonaro (2019–2022)</button>
      <button class="mandate-pill" data-mandate="temer">⚖️ Temer (2016–2018)</button>
      <button class="mandate-pill" data-mandate="dilma">⭐ Dilma (2011–2016)</button>
      <button class="mandate-pill" data-mandate="lula1_2">⭐ Lula (2003–2010)</button>
    </div>

    <!-- Presidential 3D Credit Card -->
    <section class="card-section">
      <div class="credit-card-3d-wrap">
        <div class="presidential-card">
          <div class="card-chip-band">
            <div class="gold-chip"></div>
            <div class="card-contactless">
              <span class="material-symbols-outlined">contactless</span>
            </div>
            <div id="card-badge-tag" class="card-badge-tag">REPÚBLICA BLACK</div>
          </div>

          <div class="card-balance-display">
            <div class="card-balance-label">
              <span class="material-symbols-outlined" style="font-size: 14px;">credit_card</span>
              Fatura Acumulada no Cartão Corporativo
            </div>
            <div class="card-balance-amount" id="card-balance-val">
              R$ 142.780.912<span class="cents">,45</span>
            </div>
          </div>

          <div class="card-info-bottom">
            <div>
              <div id="card-holder-name" class="card-holder-name">Presidência da República do Brasil</div>
              <div id="card-number-mask" class="card-number-mask">•••• •••• •••• 2026</div>
            </div>
            <div class="card-flag-logo">
              <span id="card-flag-icon">🇧🇷</span>
              <small>CPGF GOV</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pay with Taxes Featured Button -->
    <button id="btn-pay-tax" class="btn-pay-tax" type="button">
      <span class="material-symbols-outlined">payments</span>
      Pagar Fatura com meu Imposto de Renda
    </button>

    <!-- Quick Actions Carousel -->
    <div class="quick-actions-bar">
      <div class="action-card-btn" id="action-categories">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">pie_chart</span>
        </div>
        <span>Categorias</span>
      </div>
      <div class="action-card-btn" id="action-rankings">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">trophy</span>
        </div>
        <span>Top Recordes</span>
      </div>
      <div class="action-card-btn" id="action-calculator">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">calculate</span>
        </div>
        <span>Calculadora</span>
      </div>
      <div class="action-card-btn" id="action-nubot">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">psychology</span>
        </div>
        <span>NuBot IA</span>
      </div>
    </div>

    <!-- Feed Controls (Search & Category Pills) -->
    <div class="feed-controls">
      <div class="search-input-wrap">
        <span class="material-symbols-outlined">search</span>
        <input type="text" id="feed-search" class="feed-search-input" placeholder="Buscar por padaria, posto, hotel, cidade ou CNPJ...">
      </div>

      <div class="category-tags-scroll">
        <button class="cat-pill active" data-category="all">Todas as Despesas</button>
        <button class="cat-pill" data-category="Alimentação & Padarias">🥖 Alimentação & Padarias</button>
        <button class="cat-pill" data-category="Hospedagem & Hotéis">🏨 Hospedagem & Hotéis</button>
        <button class="cat-pill" data-category="Combustíveis & Frotas">⛽ Combustíveis & Frotas</button>
        <button class="cat-pill" data-category="Mercados & Suprimentos">🛒 Mercados & Suprimentos</button>
        <button class="cat-pill" data-category="Segurança & Apoio Tático">🔒 Segurança & Tático</button>
      </div>
    </div>

    <!-- Transactions List Section -->
    <div class="transactions-header">
      <h2>Extrato de Lançamentos</h2>
      <span id="feed-count" class="feed-counter">Carregando dados públicos...</span>
    </div>

    <div id="transactions-feed" class="transactions-list">
      <!-- Injetado dinamicamente via app.js -->
    </div>
  </main>

  <!-- Modal: Comprovante / Detalhes do Lançamento -->
  <div class="modal-overlay" id="modal-receipt">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>🧾</span> Comprovante Oficial</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div id="modal-receipt-content"></div>
    </div>
  </div>

  <!-- Modal: Categorias & Gráficos -->
  <div class="modal-overlay" id="modal-categories">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>📊</span> Divisão por Categorias</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 14px;">
        Média percentual de gastos acumulados na série histórica da Presidência da República:
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span>🏨 Hospedagem & Hotelaria</span>
            <strong style="color: #8b5cf6;">42.5%</strong>
          </div>
          <div style="height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;">
            <div style="width: 42.5%; height: 100%; background: #8b5cf6;"></div>
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span>🥖 Alimentação, Restaurantes & Padarias</span>
            <strong style="color: #ec4899;">28.3%</strong>
          </div>
          <div style="height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;">
            <div style="width: 28.3%; height: 100%; background: #ec4899;"></div>
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span>⛽ Combustíveis & Frotas de Apoio</span>
            <strong style="color: #f59e0b;">17.2%</strong>
          </div>
          <div style="height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;">
            <div style="width: 17.2%; height: 100%; background: #f59e0b;"></div>
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span>🛒 Mercados & Suprimentos Gerais</span>
            <strong style="color: #10b981;">7.8%</strong>
          </div>
          <div style="height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;">
            <div style="width: 7.8%; height: 100%; background: #10b981;"></div>
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
            <span>🔒 Segurança & Apoio Tático</span>
            <strong style="color: #3b82f6;">4.2%</strong>
          </div>
          <div style="height: 8px; background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;">
            <div style="width: 4.2%; height: 100%; background: #3b82f6;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal: Top Recordes & Curiosidades -->
  <div class="modal-overlay" id="modal-rankings">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>🏆</span> Top Gastos & Curiosidades</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 12px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px;">
            <span>🥖 Padaria Princesa (SP)</span>
            <span style="color: var(--accent-amber);">R$ 9.540,00</span>
          </div>
          <div style="font-size: 11px; color: var(--text-secondary);">Governo Jair Bolsonaro (15/08/2021) • Centenas de lanches individuais para comitiva e batedores.</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 12px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px;">
            <span>🏨 Copacabana Palace (RJ)</span>
            <span style="color: var(--accent-amber);">R$ 94.300,00</span>
          </div>
          <div style="font-size: 11px; color: var(--text-secondary);">Governo Lula (12/06/2007) • Hospedagem e conferência pré-Jogos Pan-Americanos 2007.</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 12px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px;">
            <span>⛽ Auto Posto Maracanã (RJ)</span>
            <span style="color: var(--accent-amber);">R$ 33.150,00</span>
          </div>
          <div style="font-size: 11px; color: var(--text-secondary);">Governo Jair Bolsonaro (23/05/2021) • Abastecimento simultâneo de frota e escolta em evento.</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 12px;">
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px;">
            <span>🏨 Hotel Transamérica (SP)</span>
            <span style="color: var(--accent-amber);">R$ 67.800,00</span>
          </div>
          <div style="font-size: 11px; color: var(--text-secondary);">Governo Dilma Rousseff (10/06/2014) • Gabinete avançado para a abertura da Copa do Mundo 2014.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal: Calculadora do Cidadão -->
  <div class="modal-overlay" id="modal-calculator">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>⚖️</span> Calculadora do Cidadão</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 12px;">
        Descubra quanto tempo da sua vida de trabalho seria necessário para pagar a fatura do mandato selecionado:
      </div>
      <div class="calc-input-group">
        <label for="calc-salary-input">Seu Salário Mensal Líquido (R$):</label>
        <input type="number" id="calc-salary-input" class="calc-input" placeholder="Ex: 3000" value="3000">
      </div>
      <div id="calc-live-result" style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-glass); border-radius: 10px; padding: 14px; font-size: 12px; color: #fff; line-height: 1.5;">
        <!-- Injetado dinamicamente -->
      </div>
    </div>
  </div>

  <!-- Modal: NuBot IA -->
  <div class="modal-overlay" id="modal-nubot">
    <div class="modal-container" style="display: flex; flex-direction: column; height: 500px;">
      <div class="modal-header">
        <h2><span>🤖</span> NuBot Presidencial</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div id="nubot-messages" style="flex: 1; overflow-y: auto; padding: 8px 0; display: flex; flex-direction: column;">
        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 10px; margin-bottom: 8px; font-size: 12px; color: #e2e8f0; margin-right: 20%;">
          <strong>🤖 NuBot:</strong><br>
          Olá, cidadão! Eu sou o assistente de transparência do <strong>NuGov</strong>. Pergunte-me sobre qualquer gasto em padarias, hotéis, combustível ou sobre os mandatos de Lula, Bolsonaro, Temer ou Dilma!
        </div>
      </div>
      <form id="nubot-form" style="display: flex; gap: 8px; margin-top: 10px;">
        <input type="text" id="nubot-input" class="calc-input" placeholder="Pergunte algo ao NuBot..." style="flex: 1;">
        <button type="submit" style="background: var(--nu-purple); border: none; color: #fff; padding: 0 16px; border-radius: 8px; cursor: pointer; font-weight: 700;">Enviar</button>
      </form>
    </div>
  </div>

  <!-- Rodapé Institucional Padrão 4U.IA.BR -->
  <footer class="footer-clean">
    <div class="container">
      <div class="footer-brand">
        <span style="color: var(--nu-purple-light);">🟣</span> <span>NuGov — 4U.IA.BR</span>
      </div>
      <div class="footer-links">
        <a href="privacidade.php">Privacidade</a>
        <span class="sep">•</span>
        <a href="termos.php">Termos de Uso</a>
        <span class="sep">•</span>
        <a href="suporte.php">Suporte & FAQ</a>
        <span class="sep">•</span>
        <a href="https://github.com/4u-Labs" target="_blank" rel="noopener noreferrer" title="4U.IA.BR no GitHub">GitHub</a>
      </div>
      <div class="footer-copyright">
        &copy; <span id="year"><?php echo date('Y'); ?></span> 4U.IA.BR — Todos os direitos reservados.
      </div>
    </div>
  </footer>

  <script src="assets/js/app.js"></script>
  <script src="assets/js/pwa.js"></script>
</body>
</html>
