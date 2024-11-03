
// Selección de elementos
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const dropdownMenu = document.getElementById('dropdown');

// Función para abrir el menú
openButton.addEventListener('click', () => {
    dropdownMenu.classList.add('show'); // Muestra el menú
    openButton.style.display = 'none'; // Oculta el botón de abrir
    closeButton.style.display = 'block'; // Muestra el botón de cerrar
});

// Función para cerrar el menú
closeButton.addEventListener('click', () => {
    dropdownMenu.classList.remove('show'); // Oculta el menú
    closeButton.style.display = 'none'; // Oculta el botón de cerrar
    openButton.style.display = 'block'; // Muestra el botón de abrir
});

