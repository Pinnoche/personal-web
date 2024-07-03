function displayTimeAndDay() {
            const now = new Date();

            // Display current time in UTC
            const utcTime = now.toISOString().slice(11, 19);
            document.getElementById('time').textContent = utcTime;

            // Display current day of the week
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayOfWeek = daysOfWeek[now.getUTCDay()];
            document.getElementById('day').textContent = dayOfWeek;
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