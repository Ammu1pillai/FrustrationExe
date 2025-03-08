const treasureChest = document.getElementById('treasure-chest');
const countdownDisplay = document.getElementById('countdown');

let timeLeft = 30; // 30 seconds

// Function to move the treasure chest randomly
const moveTreasureChest = () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  treasureChest.style.left = `${x}px`;
  treasureChest.style.top = `${y}px`;
};

// Event listener to move the treasure chest when hovered
treasureChest.addEventListener('mouseover', moveTreasureChest);

// Function to update the countdown
const updateCountdown = () => {
  if (timeLeft > 0) {
    countdownDisplay.textContent = `You have ${timeLeft} seconds to open the chest.`;
    timeLeft--;
  } else {
    clearInterval(countdownInterval); // Stop the countdown

    // Stop the treasure chest from moving
    treasureChest.removeEventListener('mouseover', moveTreasureChest);

    // Hide the treasure chest
    treasureChest.style.display = 'none';

    // Clear the countdown message
    countdownDisplay.textContent = '';

    // Redirect to window.html immediately
    window.location.href = 'window.html';
  }
};

// Change chest image when clicked
document.addEventListener('click', () => {
  if (treasureChest) {
    treasureChest.src = 'treasure-chest-open.png';
  }
});

// Start the countdown
const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
