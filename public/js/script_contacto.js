document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    // Validación de formularios
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity() || !validacion(form)) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});

function validacion(form) {
    const email = form.querySelector('#email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        alert("La dirección de email no es válida.");
        return false;
    }
    
    return true;
}

