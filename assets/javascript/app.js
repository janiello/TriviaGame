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

    // ...Hides the "start-screen" element...
    var hideStart = document.getElementById("start-screen");
    hideStart.style.display = "none";
    
    // ...And brings up the trivia questions.
    var showQuestions = document.getElementById("questions");
    showQuestions.style.display = "block";
    
    // This function actually changes the time variable in the "time-remaining" div.
    function countdown() {
        time--;
        document.getElementById("time-remaining").innerText = time;
        
        // If timer hits 0...
        if (time === 0) {
            
        // Run the stop function to stop the timer...
        stop();

        // Hide the "questions" div...
        showQuestions.style.display = "none";
        
        // Show the "score" div...
        var showScore = document.getElementById("score");
        showScore.style.display = "block";
        
        // Calculate questions answered...
        
        
        // Questions unanswered...
        
        // And correct answers.
        
        }
    }
}

// Stop function to stop the timer...
function stop() {
    clearInterval(intervalId);
}

// If all questions are answered, calculate correct answers.

