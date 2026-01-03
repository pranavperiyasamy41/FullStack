function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImages() {
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();

    document.querySelector(".img1").setAttribute(
        "src",
        `images/dice${randomNumber1}.png`
    );
    document.querySelector(".img2").setAttribute(
        "src",
        `images/dice${randomNumber2}.png`
    );

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerText = "It's a Draw!";
    }
}

updateDiceImages();
