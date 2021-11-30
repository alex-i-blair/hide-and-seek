// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let ranItem = getRandomItem(hidingPlaces);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('shed', ranItem);
});

treeButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let ranItem = getRandomItem(hidingPlaces);
    handleGuess('tree', ranItem);
    // then use that correct spot to 'handle the guess' using the handleGuess function
});

boulderButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let ranItem = getRandomItem(hidingPlaces);
    handleGuess('boulder', ranItem);
    // then use that correct spot to 'handle the guess' using the handleGuess function
});

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function resetStyles() {
    // should remove the face class from all containers
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

function handleGuess(userGuess, correctSpot) {
    // should reset the styles
    resetStyles();
    // then increment the guesses
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    let correctGuess = document.getElementById(`${correctSpot}-container`);
    
    // then add the face class to that element so that the face shows up
    correctGuess.classList.add('face');
    // console.log(userGuess);
    // console.log(correctGuess);
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
        console.log(correctGuesses);
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}