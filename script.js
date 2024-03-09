const nameInput = document.getElementById('name-input');
const submitNameButton = document.getElementById('submit-name');
const questionContainer = document.getElementById('question-container');
const inputContainer = document.querySelector('.input-container');
const disclaimer = document.querySelector('.disclaimer');

submitNameButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name.trim() !== '') {
        showQuestion(name);
    } else {
        alert('Please enter your name.');
    }
});

function showQuestion(name) {
    inputContainer.style.display = 'none'; // Hide input container
    disclaimer.style.display = 'none'; // Hide disclaimer

    questionContainer.innerHTML = `
        <h1 class="question">Hey ${name}, Are You GAY?</h1>
        <button class="button" id="yes-button">YES! I AM </button>
        <button class="button" id="no-button">NO</button>
    `;
    questionContainer.style.display = 'block';

    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    noButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', () => {
        alert("FINALLY YOU ACCEPTED 🤡");
        restartGame();
    });
    
    };


function restartGame() {
    questionContainer.style.display = 'none'; // Hide question container
    inputContainer.style.display = 'block'; // Show input container
    disclaimer.style.display = 'block'; // Show disclaimer
    nameInput.value = ''; // Clear input field
}
