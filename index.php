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
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
  <link rel="stylesheet" href="assets/css/nugov.css?v=<?php echo filemtime('assets/css/nugov.css'); ?>">
</head>
<body>
  <div class="bg-glow-mesh"></div>

  <!-- Sticky Top Wrapper: Impostômetro + NuGov Header -->
  <div class="sticky-top-wrapper">
    <!-- Top Bar: Impostômetro Nacional em Tempo Real -->
    <div class="impostometro-top-bar" onclick="openModal('modal-impostometro')" title="Clique para ver o que daria para pagar com esses impostos">
      <div class="container">
        <div class="impostometro-content">
          <div class="imposto-badge-live">
            <span class="live-dot"></span> AO VIVO
          </div>
          <div class="imposto-text-wrap">
            <span class="imposto-label">🇧🇷 Impostômetro Nacional <?php echo date('Y'); ?>:</span>
            <span id="impostometro-live-counter" class="imposto-counter-val">Carregando...</span>
            <span class="imposto-speed">(+R$ 120.490/seg)</span>
          </div>
          <div class="imposto-btn-info">
            <span>Ver Impacto</span> ➔
          </div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="nugov-header">
      <div class="container">
        <div class="header-content">
          <a href="index.php" class="brand-area">
            <img src="assets/img/app-logo.png?v=<?php echo filemtime('assets/img/app-logo.png'); ?>" alt="NuGov" class="brand-logo-img">
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
  </div>

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

    <!-- Currency Mode: Nominal vs IPCA Correction -->
    <div class="currency-mode-bar">
      <div class="mode-toggle-group">
        <button class="mode-toggle-btn active" id="btn-mode-nominal" data-mode="nominal" type="button">
          <span>💵</span> Valores Nominais
        </button>
        <button class="mode-toggle-btn" id="btn-mode-ipca" data-mode="ipca" type="button">
          <span>📈</span> Corrigido IPCA (2026)
          <span class="mode-badge-rec">OFICIAL</span>
        </button>
      </div>
      <div class="mode-hint-text" id="mode-hint-text">
        Exibindo valores históricos nominais registrados na data de cada despesa.
      </div>
    </div>

    <!-- Presidential 3D Credit Card -->
    <section class="card-section">
      <div class="credit-card-3d-wrap">
        <div class="presidential-card">
          <div class="card-chip-band">
            <div class="card-chip-left">
              <div class="card-chip-wrap">
                <img src="assets/img/chip.png?v=<?php echo filemtime('assets/img/chip.png'); ?>" alt="Chip de Cartão" class="card-chip-img">
              </div>
              <div class="card-contactless">
                <span class="material-symbols-outlined">contactless</span>
              </div>
            </div>
            <div class="card-badge-group">
              <div id="card-badge-tag" class="card-badge-tag">REPÚBLICA BLACK</div>
              <div class="card-limit-badge">
                <span class="limit-lbl">Limite Cartão:</span>
                <span class="limit-val">Ilimitado <span class="limit-inf">∞</span></span>
              </div>
            </div>
          </div>

          <div class="card-balance-display">
            <div class="card-balance-label">
              <span class="material-symbols-outlined" style="font-size: 14px;">credit_card</span>
              <span id="card-balance-mode-label">Fatura Acumulada no Cartão Corporativo</span>
            </div>
            <div class="card-balance-amount" id="card-balance-val">
              R$ 142.780.912<span class="cents">,45</span>
            </div>
            <div class="card-averages-row" id="card-averages-wrap">
              <div class="avg-stat-item">
                <span class="avg-stat-title">Média Mensal</span>
                <span class="avg-stat-val" id="card-monthly-avg">R$ 513.596/mês</span>
              </div>
              <div class="avg-stat-divider"></div>
              <div class="avg-stat-item">
                <span class="avg-stat-title">Média Diária</span>
                <span class="avg-stat-val" id="card-daily-avg">R$ 16.877/dia</span>
              </div>
              <div class="avg-stat-divider"></div>
              <div class="avg-stat-item">
                <span class="avg-stat-title">Período</span>
                <span class="avg-stat-val" id="card-duration-val">278 meses</span>
              </div>
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
      <div class="action-card-btn" id="action-companies">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">store</span>
        </div>
        <span>Top Empresas</span>
      </div>
      <div class="action-card-btn" id="action-expensive-days">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">calendar_month</span>
        </div>
        <span>Dias Recordes</span>
      </div>
      <div class="action-card-btn" id="action-duel">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">swords</span>
        </div>
        <span>Duelo</span>
      </div>
      <div class="action-card-btn" id="action-quiz">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">quiz</span>
        </div>
        <span>Quiz</span>
      </div>
      <div class="action-card-btn" id="action-rankings">
        <div class="action-icon-wrap">
          <span class="material-symbols-outlined">trophy</span>
        </div>
        <span>Curiosidades</span>
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

    <!-- Feed Controls (Search, State/UF & Category Pills) -->
    <div class="feed-controls">
      <div class="search-and-uf-wrap">
        <div class="search-input-wrap">
          <span class="material-symbols-outlined search-icon-badge">search</span>
          <input type="text" id="feed-search" class="feed-search-input" placeholder="Buscar por padaria, posto, hotel, cidade ou CNPJ...">
        </div>
        <div class="uf-select-wrap">
          <select id="feed-uf-filter" class="feed-uf-select">
            <option value="all">📍 Todas as UFs (Brasil)</option>
            <option value="DF">DF - Distrito Federal</option>
            <option value="SP">SP - São Paulo</option>
            <option value="RJ">RJ - Rio de Janeiro</option>
            <option value="BA">BA - Bahia</option>
            <option value="RS">RS - Rio Grande do Sul</option>
            <option value="PR">PR - Paraná</option>
            <option value="SC">SC - Santa Catarina</option>
            <option value="MG">MG - Minas Gerais</option>
            <option value="PE">PE - Pernambuco</option>
            <option value="CE">CE - Ceará</option>
            <option value="AM">AM - Amazonas</option>
            <option value="PA">PA - Pará</option>
            <option value="RN">RN - Rio Grande do Norte</option>
          </select>
        </div>
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

    <!-- Top 10 Gastos Section Header with Instant Currency Mode Toggle -->
    <div class="transactions-header">
      <div class="header-title-wrap">
        <h2>🔥 Top 10 Maiores Gastos</h2>
        <span id="feed-count" class="feed-counter">10 maiores lançamentos</span>
      </div>
      <div class="feed-currency-toggle" id="feed-currency-toggle">
        <button type="button" class="btn-feed-mode active" id="btn-feed-mode-nominal" data-mode="nominal" title="Exibir valores originais da época">
          💵 Nominal
        </button>
        <button type="button" class="btn-feed-mode" id="btn-feed-mode-ipca" data-mode="ipca" title="Exibir valores com correção monetária pelo IPCA">
          📈 Corrigido IPCA
        </button>
      </div>
    </div>

    <!-- Active Filter Indicator Banner -->
    <div id="active-filter-banner" style="display: none; margin-bottom: 12px; background: rgba(130, 10, 209, 0.18); border: 1px solid var(--nu-purple); border-radius: 10px; padding: 10px 14px; font-size: 12px; color: #fff; justify-content: space-between; align-items: center;">
      <span id="active-filter-text">Filtrando por: <strong>...</strong></span>
      <button type="button" id="btn-clear-filters" style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; cursor: pointer;">Ver Todas as Despesas ✕</button>
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

  <!-- Modal: Top Empresas Favorecidas -->
  <div class="modal-overlay" id="modal-companies">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>🏢</span> Top 10 Empresas Favorecidas</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 14px;">
        Fornecedores e redes que mais faturaram com o Cartão Corporativo Presidencial na série histórica (2003–2026):
      </div>
      <div id="modal-companies-list" style="display: flex; flex-direction: column; gap: 10px;">
        <!-- Injetado dinamicamente via app.js -->
      </div>
    </div>
  </div>

  <!-- Modal: 10 Dias Mais Caros da República -->
  <div class="modal-overlay" id="modal-expensive-days">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>🗓️</span> 10 Dias Mais Caros da História</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 14px;">
        Os maiores picos de despesa concentrada em um único dia por governos da República:
      </div>
      <div id="modal-expensive-days-list" style="display: flex; flex-direction: column; gap: 10px;">
        <!-- Injetado dinamicamente via app.js -->
      </div>
    </div>
  </div>

  <!-- Modal: Duelo de Mandatos -->
  <div class="modal-overlay" id="modal-duel">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>⚔️</span> Duelo de Mandatos Presidenciais</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 12px;">
        Compare lado a lado o desempenho e gastos de dois governos com rigor estatístico:
      </div>
      <div class="duel-selectors">
        <select id="duel-select-a" class="duel-select">
          <option value="lula1_2" selected>Lula (2003–2010)</option>
          <option value="bolsonaro">Bolsonaro (2019–2022)</option>
          <option value="dilma">Dilma (2011–2016)</option>
          <option value="temer">Temer (2016–2018)</option>
          <option value="lula3">Lula (2023–2026)</option>
        </select>
        <div style="font-weight: 900; font-size: 14px; color: var(--nu-purple-light); padding: 0 4px;">VS</div>
        <select id="duel-select-b" class="duel-select">
          <option value="bolsonaro" selected>Bolsonaro (2019–2022)</option>
          <option value="lula1_2">Lula (2003–2010)</option>
          <option value="dilma">Dilma (2011–2016)</option>
          <option value="temer">Temer (2016–2018)</option>
          <option value="lula3">Lula (2023–2026)</option>
        </select>
      </div>
      <div id="duel-comparison-content" class="duel-grid">
        <!-- Injetado dinamicamente via app.js -->
      </div>
      <div style="margin-top: 14px;">
        <button id="btn-share-duel-wa" class="btn-share-wa" type="button" style="width: 100%;">
          <span>💬</span> Mandar Comparativo no WhatsApp
        </button>
      </div>
    </div>
  </div>

  <!-- Modal: Quiz do Contribuinte -->
  <div class="modal-overlay" id="modal-quiz">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>🎯</span> Quiz do Contribuinte</h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>
      <div class="quiz-header-status">
        <span id="quiz-progress-text">Pergunta 1 de 5</span>
        <span id="quiz-score-badge" style="color: var(--accent-amber); font-weight: 800;">Pontos: 0</span>
      </div>
      <div class="quiz-progress-bar">
        <div id="quiz-progress-fill" class="quiz-progress-fill" style="width: 20%;"></div>
      </div>
      <div id="quiz-card-content">
        <!-- Injetado dinamicamente via app.js -->
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
      <div class="calc-tabs">
        <button type="button" class="calc-tab-btn active" id="btn-calc-tab-salary">💼 Meu Salário</button>
        <button type="button" class="calc-tab-btn" id="btn-calc-tab-services">🏥 Serviços Públicos</button>
      </div>
      <div id="calc-view-salary">
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
      <div id="calc-view-services" style="display: none;">
        <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 12px;">
          O que a fatura do mandato selecionado construiria ou financiaria em serviços públicos essenciais:
        </div>
        <div id="calc-services-result" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <!-- Injetado dinamicamente -->
        </div>
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

  <!-- Modal: Impostômetro Nacional Detalhes -->
  <div class="modal-overlay" id="modal-impostometro">
    <div class="modal-container">
      <div class="modal-header">
        <h2><span>🇧🇷</span> Impostômetro Nacional <?php echo date('Y'); ?></h2>
        <button class="btn-close-modal" type="button">×</button>
      </div>

      <div style="background: rgba(130, 10, 209, 0.15); border: 1px solid var(--nu-purple); border-radius: 14px; padding: 18px; text-align: center; margin-bottom: 16px;">
        <span style="font-size: 11px; text-transform: uppercase; color: var(--text-secondary); font-weight: 700; letter-spacing: 0.5px; display: block; margin-bottom: 4px;">
          Total Pago em Impostos no Brasil até este Segundo:
        </span>
        <div id="modal-impostometro-live-val" style="font-size: 26px; font-weight: 900; color: var(--accent-green); font-family: monospace, sans-serif; text-shadow: 0 0 15px rgba(16, 185, 129, 0.4);">
          Carregando...
        </div>
        <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
          Ritmo estimado: <strong>+R$ 120.497,21</strong> a cada segundo
        </div>
      </div>

      <div style="font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 8px;">
        💡 O que esse valor arrecadado pagaria hoje?
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px;">
        <div style="background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
          <span style="font-size: 22px; display: block; margin-bottom: 2px;">🚑</span>
          <div id="imp-ambulancias" style="font-size: 16px; font-weight: 800; color: var(--accent-amber);">...</div>
          <span style="font-size: 10.5px; color: var(--text-secondary);">Ambulâncias UTI</span>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
          <span style="font-size: 22px; display: block; margin-bottom: 2px;">🏫</span>
          <div id="imp-escolas" style="font-size: 16px; font-weight: 800; color: var(--accent-green);">...</div>
          <span style="font-size: 10.5px; color: var(--text-secondary);">Escolas Padrão FNDE</span>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
          <span style="font-size: 22px; display: block; margin-bottom: 2px;">🥗</span>
          <div id="imp-cestas" style="font-size: 16px; font-weight: 800; color: var(--accent-cyan);">...</div>
          <span style="font-size: 10.5px; color: var(--text-secondary);">Cestas Básicas</span>
        </div>
        <div style="background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; text-align: center;">
          <span style="font-size: 22px; display: block; margin-bottom: 2px;">💳</span>
          <div id="imp-tempo-cartao" style="font-size: 16px; font-weight: 800; color: var(--nu-purple-light);">...</div>
          <span style="font-size: 10.5px; color: var(--text-secondary);">Para pagar 20 anos de Cartão Corporativo</span>
        </div>
      </div>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px; font-size: 11px; color: var(--text-secondary); line-height: 1.5;">
        <strong style="color: #fff;">📊 Metodologia & Fontes Oficiais:</strong><br>
        O cálculo utiliza a série histórica e relatórios da <strong>Receita Federal do Brasil</strong>, <strong>Secretaria do Tesouro Nacional (STN)</strong>, <strong>CONFAZ</strong> e apurações do <strong>IBPT</strong> para tributos federais, estaduais e municipais.
      </div>
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

  <script src="assets/js/app.js?v=<?php echo filemtime('assets/js/app.js'); ?>"></script>
  <script src="assets/js/pwa.js?v=<?php echo filemtime('assets/js/pwa.js'); ?>"></script>
</body>
</html>
