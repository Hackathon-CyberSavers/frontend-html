document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email: email,
        password: password
    };

    const result = await fetch('https://cybersavers-api.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }
            const data = await response.json()
            return data;
        })

        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao fazer login. Tente novamente.');
        });

    localStorage.setItem('token', result.data.token);

    window.location.href = 'homepage.html';
});