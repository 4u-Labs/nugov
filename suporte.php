<?php
// NuGov — Suporte, FAQ e Contato

$feedback = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $assunto = trim($_POST['assunto'] ?? 'Contato via NuGov');
    $mensagem = trim($_POST['mensagem'] ?? '');
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'Desconhecido';
    $timestamp = date('Y-m-d H:i:s');

    if (!empty($nome) && !empty($email) && !empty($mensagem)) {
        $logDir = __DIR__ . '/uploads';
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }
        $logFile = $logDir . '/messages_log.json';
        $currentLogs = [];
        if (file_exists($logFile)) {
            $raw = file_get_contents($logFile);
            $currentLogs = json_decode($raw, true) ?: [];
        }

        $newEntry = [
            'timestamp' => $timestamp,
            'ip' => $ip,
            'nome' => $nome,
            'email' => $email,
            'assunto' => $assunto,
            'mensagem' => $mensagem
        ];

        $currentLogs[] = $newEntry;
        file_put_contents($logFile, json_encode($currentLogs, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        // Envio de email institucional
        $to = 'contato@4u.ia.br';
        $headers = "From: contato@4u.ia.br\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $body = "Nova mensagem enviada pelo NuGov:\n\n";
        $body .= "Nome: $nome\nE-mail: $email\nData: $timestamp\nIP: $ip\nAssunto: $assunto\n\nMensagem:\n$mensagem\n";
        @mail($to, "[NuGov] $assunto", $body, $headers);

        $feedback = '<div style="background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent-green); color: #10b981; padding: 14px; border-radius: 10px; margin-bottom: 20px; font-size: 13px; font-weight: 700;">✅ Mensagem enviada com sucesso! Nossa equipe retornará em breve.</div>';
    } else {
        $feedback = '<div style="background: rgba(244, 63, 94, 0.15); border: 1px solid var(--accent-rose); color: #f43f5e; padding: 14px; border-radius: 10px; margin-bottom: 20px; font-size: 13px; font-weight: 700;">⚠️ Por favor, preencha todos os campos obrigatórios.</div>';
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suporte & FAQ — NuGov</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
  <link rel="stylesheet" href="assets/css/nugov.css">
  <style>
    .page-content {
      padding: 30px 0 60px;
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
    .faq-item {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      border-radius: 12px;
      margin-bottom: 10px;
      overflow: hidden;
    }
    .faq-question {
      padding: 16px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      font-size: 14px;
      color: #fff;
    }
    .faq-answer {
      display: none;
      padding: 0 16px 16px;
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.6;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding-top: 12px;
    }
    .faq-item.open .faq-answer {
      display: block;
    }
    .faq-item.open .faq-question {
      color: var(--nu-purple-light);
    }
    .contact-card {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      border-radius: var(--radius-card);
      padding: 24px;
      margin-top: 30px;
    }
    .form-group {
      margin-bottom: 14px;
    }
    .form-group label {
      display: block;
      font-size: 11.5px;
      font-weight: 700;
      color: var(--text-secondary);
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .form-control {
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid var(--border-glass);
      border-radius: 10px;
      padding: 12px 14px;
      color: #fff;
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }
    .form-control:focus {
      border-color: var(--nu-purple);
    }
    .btn-submit {
      background: linear-gradient(135deg, var(--nu-purple) 0%, var(--nu-purple-dark) 100%);
      color: #fff;
      border: none;
      padding: 14px 24px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 13.5px;
      cursor: pointer;
      width: 100%;
      box-shadow: 0 4px 14px var(--nu-purple-glow);
      transition: filter 0.2s;
    }
    .btn-submit:hover {
      filter: brightness(1.15);
    }
  </style>
</head>
<body>
  <div class="bg-glow-mesh"></div>

  <header class="nugov-header">
    <div class="container">
      <div class="header-content">
        <a href="index.php" class="brand-area">
          <div class="brand-logo-badge">nu</div>
          <div class="brand-titles">
            <h1>NuGov <span>SUPORTE & FAQ</span></h1>
            <p>Perguntas frequentes e canal de contato</p>
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

    <h1 style="font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 8px;">Perguntas Frequentes (FAQ)</h1>
    <p style="font-size: 13.5px; color: var(--text-secondary); margin-bottom: 24px;">Tire suas dúvidas sobre o funcionamento do cartão corporativo e a origem dos dados públicos.</p>

    <!-- FAQ Accordion -->
    <div class="faq-item">
      <div class="faq-question" onclick="this.parentElement.classList.toggle('open')">
        <span>O que é o Cartão de Pagamento do Governo Federal (CPGF)?</span>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div class="faq-answer">
        O CPGF é um meio de pagamento corporativo criado para despesas emergenciais, compras de pequeno vulto e suporte logístico/segurança de viagens oficiais da Presidência e órgãos públicos.
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-question" onclick="this.parentElement.classList.toggle('open')">
        <span>Por que os dados do mandato atual (2023–2026) estão com aviso de Reserva Legal?</span>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div class="faq-answer">
        Pelo Art. 24 da Lei de Acesso à Informação (Lei nº 12.527/2011), o detalhamento minucioso de compras de segurança e locomoção do Presidente em exercício fica sob reserva até o fim do mandato para resguardo de sua segurança física. O montante total, porém, é público no Portal da Transparência.
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-question" onclick="this.parentElement.classList.toggle('open')">
        <span>Esses dados e notas fiscais são reais?</span>
        <span class="material-symbols-outlined">expand_more</span>
      </div>
      <div class="faq-answer">
        Sim. Todas as transações foram extraídas diretamente dos registros oficiais da Controladoria-Geral da União (CGU), da Presidência da República e de pedidos de LAI organizados por agências de jornalismo de dados.
      </div>
    </div>

    <!-- Contact Form -->
    <div class="contact-card">
      <h2 style="font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 6px;">Fale Conosco</h2>
      <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 20px;">Dúvidas, sugestões de novos recursos ou reportes sobre o NuGov:</p>

      <?php echo $feedback; ?>

      <form action="suporte.php" method="POST">
        <div class="form-group">
          <label for="nome">Seu Nome Completo *</label>
          <input type="text" id="nome" name="nome" class="form-control" required placeholder="Ex: João da Silva">
        </div>
        <div class="form-group">
          <label for="email">Seu E-mail *</label>
          <input type="email" id="email" name="email" class="form-control" required placeholder="seu@email.com">
        </div>
        <div class="form-group">
          <label for="assunto">Assunto</label>
          <input type="text" id="assunto" name="assunto" class="form-control" placeholder="Ex: Sugestão de novo filtro de gastos">
        </div>
        <div class="form-group">
          <label for="mensagem">Mensagem *</label>
          <textarea id="mensagem" name="mensagem" class="form-control" rows="4" required placeholder="Digite sua mensagem detalhada..."></textarea>
        </div>
        <button type="submit" class="btn-submit">Enviar Mensagem</button>
      </form>
    </div>
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
