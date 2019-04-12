// Create a 60 second countdown timer in the "time-remaining" span.
var time = 60;
var intervalId;
document.getElementById("time-remaining").innerText = time;

// Create a function for the start button that starts the timer...
document.getElementById("Start").onclick = start;

function start() {
    // This clears my original "time" variable...
    clearInterval(intervalId);
    // ...And redefines it every second by calling another function (countdown).
    intervalId = setInterval(countdown, 1000);
    
    // This function actually changes the time variable in the "time-remaining" div.
    function countdown() {
        time--;
        document.getElementById("time-remaining").innerText = time;
    }
    // ...Hides the "start-screen" element...
    var hideStart = document.getElementById("start-screen");
    hideStart.style.display = "none";
    
    // ...And brings up the trivia questions.
    var showQuestions = document.getElementById("questions");
    showQuestions.style.display = "block";
    
}
// If timer hits 0...

    // Calculate questions answered...

    // Questions unanswered...
    
    // And correct answers.

// If all questions are answered, calculate correct answers.

