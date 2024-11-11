// Game Mockup Code
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 480;

const bird = { x: 50, y: 200, width: 24, height: 24, color: "#f4c542" };
const pipes = [
    { x: 300, y: 0, width: 40, height: 200 },
    { x: 300, y: 280, width: 40, height: 200 }
];
let birdVelocity = 0;
let birdGravity = 0.6;

// Draw bird
function drawBird() {
    ctx.fillStyle = bird.color;
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

// Draw pipes
function drawPipes() {
    ctx.fillStyle = "#228B22";
    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);
    });
}

// Update bird and pipes
function updateGame() {
    birdVelocity += birdGravity;
    bird.y += birdVelocity;

    pipes.forEach(pipe => {
        pipe.x -= 2;
        if (pipe.x + pipe.width < 0) {
            pipe.x = canvas.width;
        }
    });

    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        resetGame();
    }
}

// Reset bird and pipes
function resetGame() {
    bird.y = 200;
    birdVelocity = 0;
    pipes.forEach(pipe => (pipe.x = canvas.width));
}

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    drawPipes();
    updateGame();
    requestAnimationFrame(gameLoop);
}
gameLoop();

// Updates Section
const updatesList = document.getElementById("updates-list");
const updates = [
    "Version 1.2: New themes and bird skins added.",
    "Version 1.1: Improved gameplay performance.",
    "Version 1.0: Initial release of the Flappy Bird App!"
];

updates.forEach(update => {
    const li = document.createElement("li");
    li.textContent = update;
    updatesList.appendChild(li);
});
