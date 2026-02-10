// Small glow pulse effect
setInterval(() => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.boxShadow = `0 0 ${
      Math.random() * 40 + 20
    }px rgba(59,130,246,0.4)`;
  });
}, 2000);
