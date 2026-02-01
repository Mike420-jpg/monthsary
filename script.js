const button = document.querySelector('.heart-btn');
  button.addEventListener('click', (e) => {
    for (let i = 0; i < 6; i++) {
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';

      const x = e.clientX + (Math.random() * 40 - 20);
      const y = e.clientY + (Math.random() * 40 - 20);

      heart.style.left = x + 'px';
      heart.style.top = y + 'px';

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1500);
    }
  });

  const envelope = document.getElementById("envelope");

  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
  });