const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 0.5;

    for (let x = 0; x < canvas.width; x += 60) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }

    for (let y = 0; y < canvas.height; y += 60) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }

    for (let x = 0; x < canvas.width; x += 40) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }

    for (let y = 0; y < canvas.height; y += 40) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }

    ctx.stroke();

    ctx.fillStyle = '#444';
    for (let x = 0; x < canvas.width; x += 20) {
        for (let y = 0; y < canvas.height; y += 20) {
            ctx.fillRect(x - 1, y - 1, 2, 2);
        }
    }
}

drawGrid();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawGrid();
});

const progressSteps = [
    "[__Projects__]",
    "[__Projects__]",
    "[__Projects__]",
    "[|_Projects_|]",
    "[||Projects||]",
    "[|#|roject|#|]",
    "[||#|ojec|#||]",
    "[|||#|je|#|||]",
    "[++||#||#||++]",
    "[==|||##|||==]",
];

let currentStepIndex = 0;
let direction = 1; // 1 for forward, -1 for backward
const progressBarElement = document.getElementById('progress-bar');

function updateProgressBar() {
    progressBarElement.textContent = progressSteps[currentStepIndex];
    currentStepIndex += direction;
    if (currentStepIndex === progressSteps.length - 1 || currentStepIndex === 0) {
        direction *= -1;
    }
}

setInterval(updateProgressBar, 20);

