function shuffleCards() {
    const cardsContainer = document.querySelector('.card-grid');
    const cards = Array.from(cardsContainer.querySelectorAll('.card'));

    // Fisher-Yates Shuffle Algorithm
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the cards' order
        cardsContainer.appendChild(cards[j]);
    }
}

window.onload = shuffleCards;

// mouse movement on card
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { left, top } = card.getBoundingClientRect();

        const x = e.clientX - left;
        const y = e.clientY - top;

        const xRotation = ((y / height) - 0.5) * 30; // X axis
        const yRotation = ((x / width) - 0.5) * -30; // Y axis

        console.log(`X Rotation: ${xRotation}, Y Rotation: ${yRotation}`);

        card.style.setProperty('--tiltX', `${xRotation}deg`);
        card.style.setProperty('--tiltY', `${yRotation}deg`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--tiltX', '0deg');
        card.style.setProperty('--tiltY', '0deg');
    });
});
