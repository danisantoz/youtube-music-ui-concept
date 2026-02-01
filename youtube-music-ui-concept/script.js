const cards = document.querySelectorAll('.genre-card');
const playerTitle = document.getElementById('player-title');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    playerTitle.textContent = title;
  });
});
