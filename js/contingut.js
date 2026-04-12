function cambiarTema() {
    const boton = document.getElementById('botonTema');
    
    if (document.body.classList.contains('modo-oscuro')) {
        document.body.classList.remove('modo-oscuro');
        boton.textContent = 'Modo Oscuro';
    } else {
        document.body.classList.add('modo-oscuro');
        boton.textContent = 'Modo Claro';
    }
}

// Efectos simples de ratón
const boton = document.getElementById('botonTema');
boton.onmouseover = function() { this.style.transform = 'scale(1.15)'; this.style.boxShadow = '0 0 10px rgba(255, 193, 7, 0.6)'; };
boton.onmouseout = function() { this.style.transform = 'scale(1)'; this.style.boxShadow = 'none'; };

// Mostrar/Ocultar Formulario
function mostrarOcultar() {
    const formulario = document.getElementById('formularioValoracion');
    const botonForm = document.getElementById('botonFormulario');
    
    if (formulario.style.display === 'none') {
        formulario.style.display = 'flex';
        botonForm.textContent = 'Ocultar Formulario';
    } else {
        formulario.style.display = 'none';
        botonForm.textContent = 'Mostrar Formulario';
    }
}