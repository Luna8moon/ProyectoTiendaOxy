
document.getElementById('name').addEventListener('click', function() { //cuando haga click ejecute la función
    const input = document.getElementById('name');
    const value = input.value.trim();// para que no cuente los espacios en blanco como caracteres

    // Elimina la clase de error si existe
    input.classList.remove('error');

    // Valida
    if (value.length < 2) {
        input.classList.add('error'); // Agregar borde rojo
        console.log('El nombre debe tener al menos 2 caracteres.'); 
    } else if (value.length > 100) {
        input.classList.add('error'); // Agregar borde rojo
        console.log('El nombre no debe exceder los 100 caracteres.'); 
    } else {
        console.log('El nombre es válido.'); // Mensaje de éxito
    }
    });
