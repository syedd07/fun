const nameInput = document.getElementById('name-input');
const submitNameButton = document.getElementById('submit-name');
const questionContainer = document.getElementById('question-container');
const inputContainer = document.querySelector('.input-container');
const disclaimer = document.querySelector('.disclaimer');

submitNameButton.addEventListener('click', () => {
    submitName();
});

nameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        submitName();
    }
});

function submitName() {
    const name = nameInput.value;
    if (name.trim() !== '') {
        showQuestion(name);
    } else {
        alert('Please enter your name.');
    }
}

function showQuestion(name) {
    inputContainer.style.display = 'none'; // Hide input container
    disclaimer.style.display = 'none'; // Hide disclaimer

    questionContainer.innerHTML = `
        <h1 class="question">Hey ${name}, !!</h1>
        <img class="gif gif-align" src="src/why are.gif" alt="GIF">
        <button class="button" id="yes-button">YES! I AM ☠️ </button>
        <button class="button" id="no-button"> NO! AM NOT 😭</button>
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

    const imageSrc = "src/ella.png";
    const audioSrc = "src/spiderman-meme-song.mp3"; // Replace "your-audio-file.mp3" with the path to your audio file
    
    yesButton.addEventListener('click', () => {
        // Hide question container and buttons
        questionContainer.innerHTML = '';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    
        // Display loading messages
        const loadingMessages = ['Finding your perfect match 💘....'];
        const loadingMessageElement = document.createElement('p');
        loadingMessageElement.textContent = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        questionContainer.appendChild(loadingMessageElement);
    
        // Simulate delay for suspense effect
        setTimeout(() => {
            // After a delay, remove loading messages
            questionContainer.innerHTML = '';
    
            // Create image container
            const imageContainer = document.createElement('div');
            imageContainer.style.position = 'relative';
            imageContainer.style.marginBottom = '20px'; // Add margin to create space for the button
            questionContainer.appendChild(imageContainer);
    
            // Display image
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = "Life Partner";
            imageContainer.appendChild(imgElement);
    
            // Play audio file with a short delay
            setTimeout(() => {
                const audio = new Audio(audioSrc);
                audio.play();
    
                // Listen for the "ended" event on the audio element
                audio.addEventListener('ended', () => {
                    // Alert message when audio finishes
                    alert('Now You Need Some MENTAL HELP! 😂😂😂');
    
                    // Restart the game (you can implement your restart logic here)
                    // For example, you can reload the page
                    location.reload(); // This will reload the page
                });
            }, 500); // Adjust delay time as needed (in milliseconds)
    
        }, 2500); // Adjust delay time as needed (in milliseconds)
    });
    
    
    
}
