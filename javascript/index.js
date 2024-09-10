<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Adicione aqui a lógica de autenticação, como fazer uma chamada à API ou validar os dados
  if (email === "teste@exemplo.com" && password === "1234") {
      alert('Login realizado com sucesso!');
  } else {
      alert('Credenciais incorretas.');
  }
});
