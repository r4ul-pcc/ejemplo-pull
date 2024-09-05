document.getElementById('colorButton').addEventListener('click', function() {
    // Genera un color aleatorio
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Cambia el color de fondo de la página
    document.body.style.backgroundColor = randomColor;
});
