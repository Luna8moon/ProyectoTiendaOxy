
const buttonScroll = document.getElementById('buttonScroll');

// Mostrar el botón cuando el usuario ha bajado el 90% de la página
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  // Se calcula el tamaño de la página por un 90%
  if (scrollPosition >= pageHeight * 0.9) {
    buttonScroll.style.display = 'block';
  } else {
    buttonScroll.style.display = 'none';
  }
});

// Al hacer clic, espera 200ms y luego desplaza hacia arriba
buttonScroll.addEventListener('click', () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 200);
});
