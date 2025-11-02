document.addEventListener('DOMContentLoaded', () => {
  const contador = document.getElementById('contador-carrinho');

  function atualizarContador() {
    try {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      contador.textContent = carrinho.length;
    } catch (err) {
      console.error('Erro ao atualizar contador do carrinho:', err);
      contador.textContent = '0';
    }
  }

  atualizarContador();

  // Atualiza em tempo real caso outras abas mudem o carrinho
  window.addEventListener('storage', atualizarContador);
});
