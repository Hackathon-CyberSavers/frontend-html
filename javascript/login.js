document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email: email,
        password: password
    };

    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }
            return response.json(); 
        })
        .then(data => {

            localStorage.setItem('token', data.token);

            window.location.href = 'homepage.html';
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao fazer login. Tente novamente.');
        });
});