// Create a 60 second countdown timer in the "time-remaining" span.
var time = 60;
var intervalId;
document.getElementById("time-remaining").innerText = time;

// Create a function for the start button that hides the "start-screen" element...
document.getElementById("Start").onclick = start;

// Brings up the trivia questions...

// ...And starts the timer.
function start() {
    // This clears my original "time" variable...
    clearInterval(intervalId);
    // ...And redefines it every second by calling another function (countdown).
    intervalId = setInterval(countdown, 1000);
}

// This function actually changes the time variable.
function countdown() {
    time--;
    document.getElementById("time-remaining").innerText = time;
}

// If timer hits 0...

    // Calculate questions answered...

    // Questions unanswered...
    
    // And correct answers.

// If all questions are answered, calculate correct answers.

