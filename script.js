let theWholeQuiz = [
    {
        question: "Arrays in JavaScript can be used to store _______",
        answers: ["numbers","strings","booleans","all of the above"],
        solution: "all of the above"
    },
    {
        question: "Objects are defined within _____",
        answers: ["parentheses","square brackets","curly braces","quotes"],
        solution: "curly braces"  
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        answers: ["parentheses","quotation marks", "curly braces", "square brackets"],
        solution: "quotation marks"  
    },
    {
        question: "What function can you use for clicking an item?",
        answers: ["addEventListener", "if/then statement", "querySelector", "getElementbyId"],
        solution: "addEventListener"  
    },
    {
        question: "What do you use to identify a class in a CSS file?",
        answers: ["a hashtag","an asterisk","a dash","a period"],
        solution: "a period"  
    },
    {
        question: "What is used to invoke a function",
        answers: ["square brackets","parentheses","curly braces","a colon"],
        solution: "parentheses"  
    },
]


let correctAnswers = 0
let timeLeft = 10
let timerEl = document.querySelector(".timer");

let startButton = document.querySelector(".startButton");

let buttonA = document.querySelector(".A button");
let buttonB = document.querySelector(".B button");
let buttonC = document.querySelector(".C button");
let buttonD = document.querySelector(".D button");

let quizQuestion = document.querySelector(".question h3")
let answerA = document.querySelector(".A p")
let answerB = document.querySelector(".B p")
let answerC = document.querySelector(".C p")
let answerD = document.querySelector(".D p")

let feedback = document.querySelector(".feedback h2")

let playAgainButton = document.querySelector(".playAgain")



startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", removeStartButtonText);
startButton.addEventListener("click", beginQuiz);
// playAgainButton.addEventListener("click", beginQuiz);

let timeInterval
 
    

// Define startTimer
// time begins
function startTimer(){
    // Set time to longer interval when you finish
    
    timerEl.textContent = timeLeft
        timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if(timeLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            // Calls function to create and append image
            displayMessage();
        }
    }, 1000);   
}

function displayMessage(){
    timerEl.textContent = "Game Over"
    feedback.innerHTML = ""
}

function removeStartButtonText(){
    // First question needs to render on the screen 
    const startButton = document.getElementById('begin');
    startButton.innerHTML = "Play Again" 
}
let questionNumber = 0

function beginQuiz(){
    
    displayQuestion(questionNumber)
}

// connect button and answers
buttonA.addEventListener("click", determineAnswerA);
buttonB.addEventListener("click", determineAnswerB);
buttonC.addEventListener("click", determineAnswerC);
buttonD.addEventListener("click", determineAnswerD);

// compare correct answers 
function determineAnswerA(){
    if(theWholeQuiz[questionNumber].answers[0] == theWholeQuiz[questionNumber].solution){
        feedback.innerHTML = "Correct!"
        correctAnswers++
    }
    else{
        feedback.innerHTML = "Incorrect!"
        timeLeft = timeLeft - 2
    }
    //update results
    iterateQuestion()
}

function determineAnswerB(){
    if(theWholeQuiz[questionNumber].answers[1] == theWholeQuiz[questionNumber].solution){
        feedback.innerHTML = "Correct!"
        correctAnswers++
    }
    else{
        feedback.innerHTML = "Incorrect!"
        timeLeft = timeLeft - 2
    }
    iterateQuestion()
}

function determineAnswerC(){
    if(theWholeQuiz[questionNumber].answers[2] == theWholeQuiz[questionNumber].solution){
        feedback.innerHTML = "Correct!"
        correctAnswers++
    }
    else{
        feedback.innerHTML = "Incorrect!"
        timeLeft = timeLeft - 2
    }
    iterateQuestion()
}

function determineAnswerD(){
    if(theWholeQuiz[questionNumber].answers[3] == theWholeQuiz[questionNumber].solution){
        feedback.innerHTML = "Correct!"
        correctAnswers++
    }
    else{
        feedback.innerHTML = "Incorrect!"
        timeLeft = timeLeft - 2
    }
    iterateQuestion()
}

function reset() {
    clearInterval(timeInterval)
    timeLeft = 10
    questionNumber = 0
    quizQuestion.innerHTML = theWholeQuiz[questionNumber].question
    answerA.innerHTML = theWholeQuiz[questionNumber].answers[0]
    answerB.innerHTML = theWholeQuiz[questionNumber].answers[1]
    answerC.innerHTML = theWholeQuiz[questionNumber].answers[2]
    answerD.innerHTML = theWholeQuiz[questionNumber].answers[3]
}

function iterateQuestion() {
    questionNumber++
    if(questionNumber < theWholeQuiz.length && timeLeft > 0) {
        displayQuestion()
    } else if (questionNumber >= theWholeQuiz.length || timeLeft <= 0) {
        displayMessage()
        setTimeout(displayResults, 1000)
        
    }
}

function displayQuestion(){
    quizQuestion.innerHTML = theWholeQuiz[questionNumber].question
    answerA.innerHTML = theWholeQuiz[questionNumber].answers[0]
    answerB.innerHTML = theWholeQuiz[questionNumber].answers[1]
    answerC.innerHTML = theWholeQuiz[questionNumber].answers[2]
    answerD.innerHTML = theWholeQuiz[questionNumber].answers[3]

}

let results = []

function displayResults() {
    let initials = prompt("Your score is " + correctAnswers + "/" + theWholeQuiz.length + ". Please enter your initals");
    results.push(`${initials} –– ${correctAnswers}/${theWholeQuiz.length}`)
    let quizResults = document.querySelector(".results h4")
    quizResults.innerHTML = results
    correctAnswers = 0
   
}


// beginQuiz()

