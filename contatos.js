const form = document.getElementById('form-contato');
const msgSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  msgSucesso.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
  form.reset();

  setTimeout(() => msgSucesso.textContent = '', 4000);
});
