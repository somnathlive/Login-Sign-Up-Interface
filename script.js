
(function() {
    const loginCard = document.querySelector('.login-card:not(#signupCard)');
    const signupCard = document.getElementById('signupCard');
    document.querySelector('.show-signup').addEventListener('click', function(e) {
        e.preventDefault();
        loginCard.classList.add('hidden');
        signupCard.classList.remove('hidden');
    });
    document.querySelector('.show-login').addEventListener('click', function(e) {
        e.preventDefault();
        signupCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });

    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(form.id === 'loginForm' ? '✅ Welcome back!' : '✅ Account created!');
        });
    });
})();