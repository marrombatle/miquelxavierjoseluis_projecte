/* FUNCIÓ DE GESTIÓ DE VALORACIONS

Aquesta funció s’executa quan el DOM està completament carregat.

 1. Recupera les valoracions emmagatzemades a localStorage
 2. Mostra les valoracions prèvies a la llista en carregar la pàgina
 3. Amaga el missatge de "no hi ha valoracions" si existeixen comentaris
 4. Captura l’enviament del formulari i evita la recàrrega de la pàgina
 5. Valida que tots els camps estiguin complets (email, nom, cognoms, missatge)
 6. Afegeix la nova valoració a localStorage per a la persistència de dades
 7. Mostra la nova valoració a la llista sense recarregar
 8. Neteja el formulari després d’enviar-lo
 9. Mostra una alerta si hi ha camps buits
*/

document.addEventListener('DOMContentLoaded', function() {
    const mensajeTextarea = document.getElementById('mensaje');
    if (!mensajeTextarea) return;

    const formValoraciones = document.querySelector('form');
    const listaValoraciones = document.getElementById('lista-valoraciones');
    const noValoraciones = document.getElementById('no-valoraciones');

    const valoraciones = JSON.parse(localStorage.getItem('valoraciones')) || [];
    valoraciones.forEach(val => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${val.nombre} ${val.apellidos}:</strong> ${val.mensaje}`;
        listaValoraciones.appendChild(li);
    });
    if (valoraciones.length > 0) {
        noValoraciones.style.display = 'none';
    }

    if (!formValoraciones) return;

    formValoraciones.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const mensaje = mensajeTextarea.value.trim();

        if (email && nombre && apellidos && mensaje) {
            const nuevaValoracion = { nombre, apellidos, mensaje };
            valoraciones.push(nuevaValoracion);
            localStorage.setItem('valoraciones', JSON.stringify(valoraciones));

            const li = document.createElement('li');
            li.innerHTML = `<strong>${nombre} ${apellidos}:</strong> ${mensaje}`;
            listaValoraciones.appendChild(li);
            noValoraciones.style.display = 'none';
            formValoraciones.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});