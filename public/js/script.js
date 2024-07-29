

//Alto contraste
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada y lista.");

    const contrastToggle = document.getElementById('contrast-toggle');
    let highContrastMode = localStorage.getItem('highContrastMode') === 'true';

    // Aplicar el modo de alto contraste al cargar la página si está activado
    if (highContrastMode) {
        document.body.classList.add('high-contrast');
        contrastToggle.innerHTML = '<i class="bi bi-toggle-off"></i> Normal';
    } else {
        contrastToggle.innerHTML = '<i class="bi bi-toggle-on"></i> Alto Contraste';
    }

    contrastToggle.addEventListener('click', function() {
        highContrastMode = !highContrastMode;
        if (highContrastMode) {
            document.body.classList.add('high-contrast');
            contrastToggle.innerHTML = '<i class="bi bi-toggle-off"></i> Normal';
            localStorage.setItem('highContrastMode', 'true');
        } else {
            document.body.classList.remove('high-contrast');
            contrastToggle.innerHTML = '<i class="bi bi-toggle-on"></i> Alto Contraste';
            localStorage.setItem('highContrastMode', 'false');
        }
    });
});
