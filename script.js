// Set birthday date
const birthday = new Date("March 31, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = birthday - now;

    if (difference <= 0) {
        document.getElementById("timer").innerHTML = "🎉 It's Gowtham's Birthday! 🎂";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// 🎉 Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        radius: Math.random() * 4 + 2,
        speedY: Math.random() * 3 + 1
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.speedY;
        if (c.y > canvas.height) confetti.splice(i, 1);
    });
}

function update() {
    createConfetti();
    drawConfetti();
    requestAnimationFrame(update);
}

update();



// Get elements
const playButton = document.getElementById("play-music-btn");
const music = document.getElementById("friendship-song");

// Add click event
playButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playButton.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        playButton.innerHTML = "▶ Play Music";
    }
});




// Get elements
const lockBtn = document.getElementById("lock-message-btn");
const confirmationMsg = document.getElementById("confirmation-msg");

// Add click event
lockBtn.addEventListener("click", () => {
    confirmationMsg.classList.remove("hidden");
    lockBtn.disabled = true;
    lockBtn.innerHTML = "🔒 Locked!";
});



// Celebration Button Click Event
document.getElementById("confetti-btn").addEventListener("click", function () {
    const confettiCount = 100;
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-wrapper");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
});




document.addEventListener("DOMContentLoaded", function () {
    const playMusicBtn = document.getElementById("play-music-btn");
    const audio = document.getElementById("friendship-audio");

    // Allow audio to be played only after user interaction
    playMusicBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().then(() => {
                playMusicBtn.textContent = "⏸ Pause Music";
            }).catch(error => {
                console.error("Error playing audio:", error);
            });
        } else {
            audio.pause();
            playMusicBtn.textContent = "▶ Play Music";
        }
    });
});



function startMusic() {
    var audio = document.getElementById("background-music");
    audio.play();
    alert("Once Again Happy Birthday da  💖🎶");
  }