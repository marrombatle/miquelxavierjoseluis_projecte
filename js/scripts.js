/* FUNCIÓ DE VALIDACIÓ DEL FORMULARI DE LOGIN

Aquesta funció s'executa quan el DOM està completament carregat.

 1. Cerca el formulari de login a la pàgina (si existeix)
 2. Captura l'enviament del formulari i evita la recàrrega de la pàgina
 3. Valida que els camps d'email i contrasenya no estiguin buits
 4. Si estan buits, mostra un missatge d'error en vermell
 5. Si estan complets, neteja el missatge d'error i tanca el modal de login
*/

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form form');
    if (!loginForm) return;

    const errorMessage = document.getElementById('error-message');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (email === '' || password === '') {
            errorMessage.textContent = 'Por favor, complete todos los campos.';
        } else {
            errorMessage.textContent = '';
            document.getElementById('modal-toggle').checked = false;
        }
    });
});
