
function mostrarMas() {
  const contenido = document.getElementById('contenido');
  const boton = document.getElementById('botonMostrar');
  if (contenido.style.maxHeight) {
    contenido.style.maxHeight = null;
    boton.textContent = 'Mostrar más';
  } else {
    contenido.style.height = '500px'; // Establece la altura máxima deseada
    boton.textContent = 'Ocultar';
  }
}
