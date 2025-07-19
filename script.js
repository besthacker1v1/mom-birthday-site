function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}

function updateCountdown() {
  const birthday = new Date("July 20, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdown').textContent = 
      `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById('countdown').textContent = "Happy Birthday! 🎉";
  }
}

setInterval(() => {
  updateClock();
  updateCountdown();
}, 1000);

updateClock();
updateCountdown();

function showHug() {
  const popup = document.getElementById('hugPopup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 5000);
}
