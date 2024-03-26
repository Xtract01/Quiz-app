const questions = [
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers:[
            {text:"Both the head section and the body section are correct",correct: true},
            {text:"The head section",correct: false},
            {text:"The body section",correct: false},
            {text:"None of the above",correct: false},
        ]
    },
    {
        question:"Which of the two operator have the same syntax of writing",
        answers:[
            {text:"Increment and spread operator",correct: false},
            {text:"Spread operator and rest parameter",correct: true},
            {text:"	Rest parameter and increment operator",correct: false},
            {text:"	None of the above",correct: false},
        ]

    },
    {
        question:"Which method is used to insert a new element at the end of an array",
        answers:[
            {text:"unshift()",correct: false},
            {text:"push()",correct: true},
            {text:"	pop()",correct: false},
            {text:"	None of the above",correct: false},
        ] 
    },
    {
        question:"Which of the following are specific to first-class functions",
        answers:[
            {text:"Functions are treated as simply values",correct: false},
            {text:"Stores functions in variables and properties",correct: false},
            {text:"Returns functions from functions",correct: false},
            {text:"All of the above",correct: true},
        ]  
    },
    {
        question:"What is the function of the bind method",
        answers:[
            {text:"bind an object to a common function, so that the function gives different result when its need",correct: true},
            {text:"Bind two different objects into one",correct: false},
            {text:"Both a and b",correct: false},
            {text:"None of the above",correct: false},
        ]   
    },
    {
        question:"Event handlers are a type of",
        answers:[
            {text:"	Interface",correct: false},
            {text:"Functions",correct: true},
            {text:"classes",correct: false},
            {text:"None of the above",correct: false},
        ]   
    },
    {
        question:"Events related to the browser window can be handled by",
        answers:[
            {text:"	Onclicks",correct: false},
            {text:"querySelector",correct: false},
            {text:"Window",correct: true},
            {text:"None of the above",correct: false},
        ]   
    },
    {
        question:"Which of the following is a window event",
        answers:[
            {text:"Focus and blur event",correct: true},
            {text:"Onclick events",correct: false},
            {text:"Both a and b",correct: false},
            {text:"None of the above",correct: false},
        ]   
    },
    {
        question:"How mouse drag events can be handled",
        answers:[
            {text:"Registering onclick handler",correct: false},
            {text:"Registering onHover handler",correct: false},
            {text:"Registering mousedown handler",correct: true},
            {text:"None of the above",correct: false},
        ]   
    },
    {
        question:"Event that is fired while scrolling a scrollable document element",
        answers:[
            {text:"scroll",correct: true},
            {text:"window",correct: false},
            {text:"onClick",correct: false},
            {text:"None of the above",correct: false},
        ]   
    }
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetStat()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetStat(){
   nextButton.style.display='none';
   while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
   }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetStat();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz();
    }
})


startQuiz();

