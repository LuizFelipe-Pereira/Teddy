const lista = document.getElementById('lista-carrinho');
const totalTexto = document.getElementById('total');
const finalizarBtn = document.getElementById('finalizar');

// Carrega o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarCarrinho() {
  lista.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}
      <button class="remover" data-index="${index}">Remover</button>
    `;
    lista.appendChild(li);
    total += item.preco;
  });

  totalTexto.textContent = carrinho.length > 0
    ? `Total: R$ ${total.toFixed(2).replace('.', ',')}`
    : 'Seu carrinho está vazio.';
}

lista.addEventListener('click', (e) => {
  if (e.target.classList.contains('remover')) {
    const index = e.target.getAttribute('data-index');
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
  }
});

finalizarBtn.addEventListener('click', () => {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  alert('Compra finalizada com sucesso!');
  carrinho = [];
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
});

atualizarCarrinho();
