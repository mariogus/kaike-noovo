// Fazer o login e autenticar o usuário

document.getElementById('login-form').addEventListener('submit', (e) => {

    e.preventDefault();


    const username = document.getElementById('username').value;

    const password = document.getElementById('password').value;


    // Verificar se o nome de usuário e a senha são válidos

    if (username && password) {

        // Fazer o login e autenticar o usuário

        if (username === 'admin' && password === 'admin123') {

            window.location.href = 'chat.html';

        } else {

            // Armazenar o nome de usuário na local storage

            localStorage.setItem('username', username);


            // Redirecionar o usuário para a página de chat

            window.location.href = 'admin.html';

        }

    }

});
