<?php
// NuGov — Política de Privacidade & LGPD
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacidade — NuGov</title>
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png?v=<?php echo filemtime('assets/img/favicon-32x32.png'); ?>">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png?v=<?php echo filemtime('assets/img/favicon-16x16.png'); ?>">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png?v=<?php echo filemtime('assets/img/apple-touch-icon.png'); ?>">
  <link rel="shortcut icon" href="favicon.ico?v=<?php echo filemtime('favicon.ico'); ?>">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
  <link rel="stylesheet" href="assets/css/nugov.css">
  <style>
    .page-content {
      padding: 30px 0 60px;
      line-height: 1.7;
    }
    .page-content h1 {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
      color: #fff;
    }
    .page-content h2 {
      font-size: 16px;
      font-weight: 700;
      margin: 24px 0 10px;
      color: var(--nu-purple-light);
    }
    .page-content p {
      font-size: 13.5px;
      color: var(--text-secondary);
      margin-bottom: 14px;
    }
    .btn-back-home {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border-glass);
      color: #fff;
      padding: 8px 16px;
      border-radius: var(--radius-btn);
      text-decoration: none;
      font-size: 12.5px;
      font-weight: 700;
      margin-bottom: 20px;
      transition: all 0.2s;
    }
    .btn-back-home:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: var(--nu-purple);
    }
  </style>
</head>
<body>
  <div class="bg-glow-mesh"></div>

  <header class="nugov-header">
    <div class="container">
      <div class="header-content">
        <a href="index.php" class="brand-area">
          <img src="assets/img/app-logo.png?v=<?php echo filemtime('assets/img/app-logo.png'); ?>" alt="NuGov" class="brand-logo-img">
          <div class="brand-titles">
            <h1>NuGov <span>PRIVACIDADE</span></h1>
            <p>Compromisso com a LGPD e Retenção Zero</p>
          </div>
        </a>
      </div>
    </div>
  </header>

  <main class="container page-content">
    <a href="index.php" class="btn-back-home">
      <span class="material-symbols-outlined" style="font-size: 16px;">arrow_back</span>
      Voltar para o NuGov
    </a>

    <h1>Política de Privacidade e Proteção de Dados</h1>
    <p>Última atualização: <?php echo date('d/m/Y'); ?></p>

    <h2>1. Princípio da Retenção Zero</h2>
    <p>O <strong>NuGov</strong> adota estritamente a arquitetura de <em>Privacy by Design</em> e <em>Retenção Zero</em>. Ao navegar pelo aplicativo ou utilizar a calculadora do cidadão, nenhuma informação pessoal, salário digitado, termo de busca ou preferência de navegação é armazenada em nossos servidores.</p>

    <h2>2. Conformidade com a LGPD (Lei nº 13.709/2018)</h2>
    <p>Todos os dados apresentados no NuGov são exclusivamente de <strong>natureza pública governamental</strong>, obtidos com respaldo na Lei de Acesso à Informação (Lei nº 12.527/2011), no Portal da Transparência da Controladoria-Geral da União (CGU) e em liberações da Presidência da República.</p>

    <h2>3. Processamento Local no Navegador</h2>
    <p>Toda a filtragem de transações, cálculos de equivalência e interações do assistente virtual ocorrem no lado do cliente (Client-Side), garantindo total privacidade e anonimato aos usuários.</p>

    <h2>4. Contato do Encarregado de Dados (DPO)</h2>
    <p>Para dúvidas sobre privacidade, utilize o canal oficial de atendimento da 4U.IA.BR através do formulário na página de <a href="suporte.php" style="color: var(--nu-purple-light);">Suporte</a> ou pelo e-mail <code>contato@4u.ia.br</code>.</p>
  </main>

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
        <a href="https://github.com/4u-Labs" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div class="footer-copyright">
        &copy; <?php echo date('Y'); ?> 4U.IA.BR — Todos os direitos reservados.
      </div>
    </div>
  </footer>
</body>
</html>
