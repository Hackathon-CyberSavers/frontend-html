<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  if (email === "teste@exemplo.com" && password === "1234") {
      alert('Login realizado com sucesso!');
  } else {
      alert('Credenciais incorretas.');
  }
});
