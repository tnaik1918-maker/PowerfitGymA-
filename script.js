document.addEventListener("DOMContentLoaded", function () {
    const joinBtn = document.querySelector("button");

    joinBtn.addEventListener("click", function () {
        alert("Welcome to PowerFit Gym! Your fitness journey starts today.");
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});
