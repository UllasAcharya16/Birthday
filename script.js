// GSAP animations for smooth intro
gsap.from(".title", { duration: 1.5, y: -50, opacity: 0 });
gsap.from(".subtitle", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".surprise", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.3,
  delay: 1.5,
});

// Confetti Effect
function triggerConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  const colors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1bd', '#f9bec7'];

  // Generate confetti pieces
  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.style.position = 'absolute';
    confettiPiece.style.width = '10px';
    confettiPiece.style.height = '10px';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.top = `${Math.random() * 100}vh`;
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.opacity = Math.random();
    confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiPiece.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    confettiContainer.appendChild(confettiPiece);

    // Remove confetti after a while
    setTimeout(() => {
      confettiContainer.removeChild(confettiPiece);
    }, 5000);
  }
}

// Confetti falling animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
  }
}
`;
document.head.appendChild(style);
