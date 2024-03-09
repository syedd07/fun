const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

noButton.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
    alert("FINALLY YOU ACCEPTED");
});
