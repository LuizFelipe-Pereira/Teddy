document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.add-carrinho');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const produtoElemento = botao.parentElement;
      const nome = produtoElemento.querySelector('h3').textContent;
      const precoTexto = produtoElemento.querySelector('p').textContent.replace('R$', '').trim();
      const preco = parseFloat(precoTexto.replace(',', '.'));

      // Recupera o carrinho do localStorage (ou cria um novo array)
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

      // Adiciona o novo produto
      carrinho.push({ nome, preco });

      // Salva de volta no localStorage
      localStorage.setItem('carrinho', JSON.stringify(carrinho));

      alert(`${nome} foi adicionado ao carrinho!`);

      // Redireciona automaticamente para o carrinho
      window.location.href = 'carrinho.html';
    });
  });
});

