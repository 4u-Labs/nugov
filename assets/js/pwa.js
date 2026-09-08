// NuGov PWA Engine

let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) {
    installBtn.style.display = 'inline-flex';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('NuGov instalado com sucesso!');
        }
        deferredInstallPrompt = null;
        installBtn.style.display = 'none';
      } else {
        alert('Para instalar o NuGov:\n• No Android/Chrome: Toque nos três pontinhos ➔ "Instalar aplicativo"\n• No iPhone/Safari: Toque em Compartilhar ➔ "Adicionar à Tela de Início".');
      }
    });
  }

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.log('SW registration note:', err);
    });
  }
});

window.addEventListener('appinstalled', () => {
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) installBtn.style.display = 'none';
});
