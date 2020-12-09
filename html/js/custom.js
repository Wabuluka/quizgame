const questionContainer = document.getElementById('questions');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit')
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
// questions
const questionsList = [
    {
        question: "1. What is the capital city of Uganda?",
        answers: {
            a: "Kampala",
            b: "Kenya",
            c: "Kamuli",
            d: "Nairobi"
        },
        answer: "a"
    },

    {
        question: "2. In what continent is Australia?",
        answers: {
            a: "Asia",
            b: "Australia",
            c: "America",
            d: "Europe"
        },
        answer: "b"
    }
];

function buildQuestion(){
    // store html output
    const output = [];

    questionsList.forEach(
        (currentQuestion, questionNumber) => {
            // possible answers
            const answers = [];

            // for each answer available
            for(letter in currentQuestion.answers){
                answers.push(
                    `
                    <div class="col-sm-6">
                        <button type="button" class="btn btn-lg btn-block btn-outline-secondary rounded-0" name="question${questionNumber}" value="${letter}">
                            ${letter}. ${currentQuestion.answers[letter]}
                        </button>
                    </div>
                    `
                );
            }

            // question and answer to output
            output.push(
                `<div class="slide">
                    <p>${currentQuestion.question}</p>
                    <div class="row">
                        ${answers.join('')} 
                    </div>
                </div> 
                `
            )
        }
    )
    questionContainer.innerHTML = output.join('');
}

function showResults(){
    // gather answer containers from the quiz
    const answerContainers  = quizContianer.querySelector('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question
    questionsList.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `button name=question${questionNumber}:clicked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;


        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect ++;
            // collor the answer green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong
        else{
            // color the answe red
            answerContainer[questionNumber].style.color = 'red'
        }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.lenght}`
}
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
}
buildQuestion()

// even listener
submitButton.addEventListener('click', showResults);