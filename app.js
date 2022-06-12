const quizDataSet =
    [
        {
            question: "which country has the currency Sterling?",
            a: "USA",
            b: "UK",
            c: "Russia",
            d: "Australia",
            correctAns: "b"
        },
        {
            question: "What does CSS stands for?",
            a: "Career Student Service",
            b: "Jason Object Notation",
            c: "Cascading Style Sheet",
            d: "Syntactically Awesome Style Sheet",
            correctAns: "c"
        },
        {
            question: "Who is the President of US?",
            a: "Florin Pop",
            b: "Joe Biden",
            c: "Ivan Saldano",
            d: "Mihai Andrei",
            correctAns: "b"
        },
        {
            question: "what is the currency of india",
            a: 'Dollar',
            b: 'pound',
            c: 'yen',
            d: 'Rupee',
            correctAns: 'd'
        },
        {
            question: 'Which among the following is the major objective of NASA Kepler mission?',
            a: 'To search for habitable planets',
            b: 'To search for earth like planets',
            c: 'To search for alien life',
            d: ' To search for potentially dangerous objects in space',
            correctAns: 'b'
        },
        {
            question: 'What does HTML stand for?',
            a: 'Hypertext Markup Language',
            b: 'Cascading Style Sheet',
            c: 'Jason Object Notation',
            d: 'Helicopters Terminals Motorboats Lamborginis',
            correctAns: 'a'
        },
        {
            question: 'What is the most used programming languagein 2019?',
            a: 'Java',
            b: 'C',
            c: 'Python',
            d: 'JavaScript',
            correctAns: 'd'
        },
        {
            question: 'Which one among the following radiations carries maximum energy?',

            a: 'Ultraviolet rays',
            b: 'Gamma rays',
            c: 'X- rays',
            d: 'Infra-red rays',
            correctAns: 'b',

        },
        {
            question: 'The head quarters of world trade organization is in?',
            a: 'Montreal',
            b: 'Seattle',
            c: 'Geneva',
            d: 'the Hague',
            correctAns: 'c',

        },
        {
            question: 'Who is the father of geometry?',
            a: 'Aristotle',
            b: ' Euclid',
            c: 'Pythagoras',
            d: ' Kepler',
            correctAns: 'b'

        },
        {

            question: 'Nobel prize is awarded for which of the following disciplines:',
            a: 'Literature, peace and economics',
            b: 'Medicine or Physiology',
            c: 'Chemistry and Physics',
            d: 'All the above',
            correctAns: 'd',

        },
        {

            question: ' Who is popularly called as the Iron Man of India?',
            a: 'Subhash Chandra Bose',
            b: 'Sardar Vallabhbhai Patel',
            c: 'Jawaharlal Nehru',
            d: 'Govind Ballabh Pant',
            correctAns: 'b',
        },
        {
            question: 'The metal whose salts are sensitive to light is',
            a: 'Silver',
            b: 'Zinc',
            c: 'Copper',
            d: 'Gold',
            correctAns: 'a',

        },

        {
            question: 'The World Largest desert is ?',
            a: 'Thar',
            b: 'Kalahari',
            c: 'Sahara',
            d: 'Sonoran',
            correctAns: 'c',

        },

        {
            question: 'How longaperson should have practiced inaHigh Court to be eligible to be apointed asaJudge of Supreme Court of India?',
            a: '10 Years',
            b: '12 Years',
            c: '15 Years',
            d: '20 Years',
            correctAns: 'a',

        },
    ];


const div1 = document.querySelector('.d1');
const div2 = document.querySelector('.d2');
const selected = document.querySelector('#selected');
let num;

selected.addEventListener('change', () => {
    if (parseInt(selected.value) === 0) {
        begin.disabled = true;
    }
    else {
        num = parseInt(selected.value);
        begin.disabled = false;
    }
})


const quiz = document.getElementById("quiz");
const aText = document.querySelector('#aText');
const bText = document.querySelector('#bText');
const cText = document.querySelector('#cText');
const dText = document.querySelector('#dText');

const question = document.querySelector('#question');
const submitBtn = document.querySelector('#submit');
const answerS = document.querySelectorAll(".answers");
const begin = document.querySelector('#Fbutton');


begin.addEventListener('click', () => {
    div1.classList.toggle('d-none');
    div2.classList.toggle('d-none');
})


const span = document.querySelector('#questionNumber')

const array = [];
let score = 0;
let currentQue = 0;
let count = 0;

loadQuiz();

function loadQuiz() {
    count++;
    deselectAnswers();

    do {
        currentQue = Math.floor(Math.random() * 15);
    }
    while (array.includes(currentQue));

    array.push(currentQue);


    const questionData = quizDataSet[currentQue];
    span.innerText = array.length;

    question.innerText = questionData.question;
    aText.innerText = questionData.a;
    bText.innerText = questionData.b;
    cText.innerText = questionData.c;
    dText.innerText = questionData.d;
}



function Selected() {
    let answer = undefined;

    answerS.forEach((answerVal) => {
        if (answerVal.checked) {
            answer = answerVal.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerS.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = Selected();

    if (answer) {
        if (answer === quizDataSet[currentQue].correctAns) {
            score++;
        }

        if (count < num) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${num} questions.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})