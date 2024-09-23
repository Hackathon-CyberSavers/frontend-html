const token = localStorage.getItem('token');

if (!token) {
    alert("Faça o Login para usar")
    window.location.href = 'login.html';
}
