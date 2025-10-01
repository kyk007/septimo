// 📅 CONTADOR DE DÍAS
const fechaInicio = new Date('2025-03-04');
const hoy = new Date();
const diferencia = hoy - fechaInicio;
const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
document.getElementById('contador-dias').textContent = `${dias} días`;

// 💝 CORAZONES SORPRESA
const corazones = document.querySelectorAll('.corazon');
const mensaje = document.getElementById('mensaje-corazon');

corazones.forEach(corazon => {
  corazon.addEventListener('click', () => {
    const text = corazon.getAttribute('data-msg');
    mensaje.textContent = text;
  });
});
