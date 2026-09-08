<?php
// NuGov — Termos de Uso e Transparência Pública
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Termos de Uso — NuGov</title>
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png">
  <link rel="shortcut icon" href="favicon.ico">
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
            <h1>NuGov <span>TERMOS</span></h1>
            <p>Finalidade Educativa e Controle Social</p>
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

    <h1>Termos de Uso e Fontes de Dados</h1>
    <p>Última atualização: <?php echo date('d/m/Y'); ?></p>

    <h2>1. Finalidade do Aplicativo</h2>
    <p>O <strong>NuGov</strong> é uma aplicação web cívica, educativa e satírica criada para promover o controle social e a legibilidade dos gastos públicos federais no Brasil. O app reformata bases públicas oficiais em uma interface amigável inspirada em bancos digitais modernos.</p>

    <h2>2. Origem das Informações Públicas</h2>
    <p>Todos os valores, datas, nomes de estabelecimentos e comprovantes exibidos são derivados de fontes oficiais do Estado brasileiro, incluindo:</p>
    <ul style="margin-left: 20px; color: var(--text-secondary); font-size: 13.5px; margin-bottom: 14px;">
      <li>Portal da Transparência do Governo Federal (Controladoria-Geral da União - CGU);</li>
      <li>Secretaria-Geral da Presidência da República (desclassificações via Lei nº 12.527/2011);</li>
      <li>Acervo público de notas fiscais obtidas pela agência de dados <em>Fiquem Sabendo</em>;</li>
      <li>Repositórios estruturados da organização <em>Base dos Dados</em>.</li>
    </ul>

    <h2>3. Isenção de Vínculo Bancário</h2>
    <p>O NuGov não é uma instituição financeira, não realiza transações monetárias reais e não possui vínculo com nenhuma marca comercial bancária. As opções de "Pagar com Imposto" são de caráter puramente ilustrativo e satírico.</p>
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
