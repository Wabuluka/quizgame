const questionContainer = document.getElementById('questions');


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
                    <div class="col-sm-6 mt-5">
                        <button type="button" class="btn btn-lg btn-block btn-outline-secondary rounded-0" name="question${questionNumber}" value="${letter}">
                            ${letter}. ${currentQuestion.answers[letter]}
                        </button>
                    </div>
                    `
                );
            }

            // question and answer to output
            output.push(
                `<p>${currentQuestion.question}</p>
                <div class="row">
                    ${answers.join('')} 
                </div>
                 
                `
            )
        }
    )
    questionContainer.innerHTML = output.join('');
}

buildQuestion()