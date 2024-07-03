function displayTimeAndDay() {

            // Display current time in UTC
            const utc = new Date().toLocaleTimeString();
            document.getElementById('time').textContent = utc;

            // Display current day of the week
            const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfTheWeek = daysOfTheWeek[new Date().getUTCDay()];
            document.getElementById('day').textContent = dayOfTheWeek;
        }
        // Generate a random number between 1 and 100
        displayTimeAndDay();
        setInterval(displayTimeAndDay, 1000);
const correctNumber = Math.floor(Math.random() * 100) + 1;

const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById('guessSubmit');
const message = document.getElementById('message');

let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100!';
        return;
    }

    attempts++;

    if (userGuess === correctNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${correctNumber} in ${attempts} attempts!`;
        guessField.disabled = true;
        guessSubmit.disabled = true;
        guessSubmit.style.backgroundColor = '#ccc';
        guessSubmit.style.cursor = 'not-allowed';
    } else if (userGuess < correctNumber) {
        message.textContent = 'Too low! Try a higher number.';
    } else {
        message.textContent = 'Too high! Try a lower number.';
    }

    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);