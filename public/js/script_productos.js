document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    // Validación de formularios
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});