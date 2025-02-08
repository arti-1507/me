document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.querySelector(".yes-btn");
    const noButton = document.querySelector(".no-btn");
    const body = document.querySelector("body");

    // Background Music
    let audio = new Audio("romantic-music.mp3");
    audio.loop = true;
    audio.play();

    // Floating Hearts Animation
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);

    // "No" Button Moving Away
    if (noButton) {
        noButton.addEventListener("mouseover", function() {
            noButton.style.position = "absolute";
            noButton.style.top = Math.random() * window.innerHeight + "px";
            noButton.style.left = Math.random() * window.innerWidth + "px";
        });
    }

    // "Yes" Button Confetti Effect
    if (yesButton) {
        yesButton.addEventListener("click", function() {
            window.location.href = "yes.html";
            startConfetti();
        });
    }

    // Fireworks Effect on "Yes" Page
    if (window.location.pathname.includes("yes.html")) {
        startFireworks();
    }
});

// Confetti Effect
function startConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Fireworks Effect
function startFireworks() {
    let fireworks = document.createElement("div");
    fireworks.classList.add("fireworks");
    document.body.appendChild(fireworks);

    setTimeout(() => {
        fireworks.remove();
    }, 5000);
}
