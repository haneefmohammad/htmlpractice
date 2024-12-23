function openEnvelope() {
    // Hide the envelope and open the letter
    document.getElementById('envelope').classList.add('open');

    // Show the love letter after a short delay
    setTimeout(function() {
        document.getElementById('letter').style.display = 'block';
        createFloatingHearts();
    }, 600); // Delay for envelope animation
}

// Function to create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        // Position the hearts randomly across the page
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.top = Math.random() * 100 + 'vh';  // Random vertical position

        // Set animation delays and sizes
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = Math.random() * 2 + 2 + 'rem'; // Random size for variety

        heartsContainer.appendChild(heart);
    }
}
