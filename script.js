document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.controls button');
  const cards = document.querySelectorAll('.card-item');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-id');

      // Вимкнути активні картки
      cards.forEach(card => {
        card.classList.remove('is-active');
        // Сховати зображення
        card.querySelector('.pic').style.display = 'none';
      });
      // Увімкнути цільову картку
      const activeCard = document.getElementById(targetId);
      activeCard.parentElement.classList.add('is-active');
      activeCard.style.display = "block";

      // Вимкнути активність всіх кнопок
      buttons.forEach(btn => btn.classList.remove('active'));

      // Увімкнути активну кнопку
      button.classList.add('active');
    });
  });
});

