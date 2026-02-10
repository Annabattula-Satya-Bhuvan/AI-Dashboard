// Subtle glow pulse for analytics effect
setInterval(() => {
  document.querySelectorAll(".chart").forEach(chart => {
    chart.style.boxShadow = `0 0 ${
      Math.random() * 40 + 20
    }px rgba(96,165,250,0.8)`;
  });
}, 2500);
