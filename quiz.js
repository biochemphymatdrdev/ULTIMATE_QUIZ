// =====================================================
// ULTIMATE QUIZ - QUIZ ENGINE
// =====================================================

const selectedSubject =
    localStorage.getItem("selectedSubject") || "Physics";

const selectedSet =
    parseInt(localStorage.getItem("selectedSet")) || 1;

const QUESTIONS_PER_SET = 10;


// =====================================================
// QUESTION BANK DETECTION
// =====================================================

let questionsBank = null;

if (selectedSubject === "Physics") {
    if (typeof physicsQuestions !== "undefined") {
        questionsBank = physicsQuestions;
    }
}

else if (selectedSubject === "Chemistry") {
    if (typeof chemistryQuestions !== "undefined") {
        questionsBank = chemistryQuestions;
    }
}

else if (selectedSubject === "Biology") {
    if (typeof biologyQuestions !== "undefined") {
        questionsBank = biologyQuestions;
    }
}

else if (selectedSubject === "Geography") {
    if (typeof geographyQuestions !== "undefined") {
        questionsBank = geographyQuestions;
    }
}

else if (selectedSubject === "History") {
    if (typeof historyQuestions !== "undefined") {
        questionsBank = historyQuestions;
    }
}

else if (selectedSubject === "Political Science") {
    if (typeof politicalScienceQuestions !== "undefined") {
        questionsBank = politicalScienceQuestions;
    }
}

else if (selectedSubject === "Economics") {
    if (typeof economicsQuestions !== "undefined") {
        questionsBank = economicsQuestions;
    }
}

else if (selectedSubject === "Sociology") {
    if (typeof sociologyQuestions !== "undefined") {
        questionsBank = sociologyQuestions;
    }
}

else if (selectedSubject === "Mathematics") {
    if (typeof mathematicsQuestions !== "undefined") {
        questionsBank = mathematicsQuestions;
    }
}

else if (selectedSubject === "G.K. / G.S.") {
    if (typeof gkGsQuestions !== "undefined") {
        questionsBank = gkGsQuestions;
    }
}

else if (selectedSubject === "Hindi") {
    if (typeof hindiQuestions !== "undefined") {
        questionsBank = hindiQuestions;
    }
}

else if (selectedSubject === "English") {
    if (typeof englishQuestions !== "undefined") {
        questionsBank = englishQuestions;
    }
}

else if (selectedSubject === "Sanskrit") {
    if (typeof sanskritQuestions !== "undefined") {
        questionsBank = sanskritQuestions;
    }
}


// =====================================================
// ERROR CHECK
// =====================================================

if (
    !Array.isArray(questionsBank) ||
    questionsBank.length === 0
) {
    document.querySelector(".quiz-page").innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:30px;
            box-sizing:border-box;
            text-align:center;
            color:white;
        ">

            <div>

                <h1 style="
                    font-size:30px;
                    margin-bottom:20px;
                ">
                    Question data could not be loaded.
                </h1>

                <p style="
                    font-size:18px;
                    line-height:1.6;
                ">
                    Selected subject:
                    <strong>${selectedSubject}</strong>
                </p>

                <p style="
                    font-size:16px;
                    line-height:1.6;
                    opacity:0.9;
                ">
                    Please check the corresponding
                    question file and variable name.
                </p>

            </div>

        </div>
    `;

    throw new Error(
        "Question bank not found for: " +
        selectedSubject
    );
}


// =====================================================
// SET VALIDATION
// =====================================================

const totalSets =
    Math.ceil(
        questionsBank.length / QUESTIONS_PER_SET
    );

let setNumber = selectedSet;

if (setNumber < 1) {
    setNumber = 1;
}

if (setNumber > totalSets) {
    setNumber = totalSets;
}


// =====================================================
// GET QUESTIONS FOR SELECTED SET
// =====================================================

const startIndex =
    (setNumber - 1) * QUESTIONS_PER_SET;

const endIndex =
    startIndex + QUESTIONS_PER_SET;

let questions =
    questionsBank.slice(
        startIndex,
        endIndex
    );


// =====================================================
// SHUFFLE QUESTIONS
// =====================================================

questions.sort(function() {
    return Math.random() - 0.5;
});


// =====================================================
// QUIZ STATE
// =====================================================

let currentQuestion = 0;

let selectedAnswers =
    new Array(questions.length).fill(null);

let answerShown =
    new Array(questions.length).fill(false);

let isFinishing = false;


// =====================================================
// DOM ELEMENTS
// =====================================================

const subjectName =
    document.getElementById("subjectName");

const setName =
    document.getElementById("setName");

const questionNumber =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const progressFill =
    document.getElementById("progressFill");

const progressPercent =
    document.getElementById("progressPercent");

const questionElement =
    document.getElementById("question");

const optionButtons = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4")
];

const previousBtn =
    document.getElementById("previousBtn");

const skipBtn =
    document.getElementById("skipBtn");

const showAnswerBtn =
    document.getElementById("showAnswerBtn");

const nextBtn =
    document.getElementById("nextBtn");


// =====================================================
// HEADER
// =====================================================

subjectName.textContent =
    selectedSubject;

setName.textContent =
    "Set " +
    String(setNumber).padStart(2, "0");


// =====================================================
// SCORE
// =====================================================

function calculateScore() {

    let score = 0;

    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        if (
            selectedAnswers[i] !== null &&
            selectedAnswers[i] === questions[i].answer
        ) {
            score++;
        }
    }

    return score;
}


// =====================================================
// LOAD QUESTION
// =====================================================

function loadQuestion() {

    const q =
        questions[currentQuestion];

    if (!q) {
        return;
    }


    // Question number

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;


    // Progress

    const percent =
        Math.round(
            ((currentQuestion + 1) /
            questions.length) * 100
        );

    progressPercent.textContent =
        percent + "%";

    progressFill.style.width =
        percent + "%";


    // Question text

    questionElement.textContent =
        q.question;


    // Reset options

    optionButtons.forEach(
        function(button, index) {

            button.textContent =
                q.options[index];

            button.classList.remove(
                "selected",
                "correct",
                "wrong"
            );

            button.style.opacity =
                "1";

            button.style.filter =
                "none";

            button.disabled =
                false;
        }
    );


    // Restore previous answer

    const previousAnswer =
        selectedAnswers[currentQuestion];

    if (previousAnswer !== null) {

        optionButtons[
            previousAnswer
        ].classList.add("selected");
    }


    // Restore SHOW ANSWER state

    if (answerShown[currentQuestion]) {

        const correctAnswer =
            q.answer;

        optionButtons[
            correctAnswer
        ].classList.add("correct");


        if (
            previousAnswer !== null &&
            previousAnswer !== correctAnswer
        ) {

            optionButtons[
                previousAnswer
            ].classList.add("wrong");
        }


        optionButtons.forEach(
            function(button) {

                button.style.opacity =
                    "1";

                button.style.filter =
                    "none";

                button.disabled =
                    true;
            }
        );
    }


    // Buttons

    previousBtn.disabled =
        currentQuestion === 0;

    skipBtn.disabled =
        previousAnswer !== null ||
        answerShown[currentQuestion];

    showAnswerBtn.disabled =
        answerShown[currentQuestion];

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextBtn.textContent =
            "FINISH";

    } else {

        nextBtn.textContent =
            "NEXT";
    }


    // Score

    scoreElement.textContent =
        calculateScore();
}


// =====================================================
// SELECT OPTION
// =====================================================

function selectOption(index) {

    if (answerShown[currentQuestion]) {
        return;
    }


    selectedAnswers[currentQuestion] =
        index;


    optionButtons.forEach(
        function(button) {

            button.classList.remove(
                "selected",
                "correct",
                "wrong"
            );

            button.style.opacity =
                "1";

            button.style.filter =
                "none";
        }
    );


    optionButtons[index]
        .classList.add("selected");


    skipBtn.disabled =
        true;


    scoreElement.textContent =
        calculateScore();
}


// =====================================================
// SHOW ANSWER
// =====================================================

function showCorrectAnswer() {

    if (answerShown[currentQuestion]) {
        return;
    }


    const q =
        questions[currentQuestion];

    const correctAnswer =
        q.answer;

    const selectedAnswer =
        selectedAnswers[currentQuestion];


    answerShown[currentQuestion] =
        true;


    // Correct option

    optionButtons[
        correctAnswer
    ].classList.add("correct");


    // Wrong selected option

    if (
        selectedAnswer !== null &&
        selectedAnswer !== correctAnswer
    ) {

        optionButtons[
            selectedAnswer
        ].classList.add("wrong");
    }


    // IMPORTANT:
    // Never dim the screen.

    optionButtons.forEach(
        function(button) {

            button.style.opacity =
                "1";

            button.style.filter =
                "none";

            button.disabled =
                true;
        }
    );


    showAnswerBtn.disabled =
        true;

    skipBtn.disabled =
        true;
}


// =====================================================
// NEXT QUESTION
// =====================================================

function nextQuestion() {

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        finishQuiz();

        return;
    }


    currentQuestion++;

    loadQuestion();
}


// =====================================================
// PREVIOUS QUESTION
// =====================================================

function previousQuestion() {

    if (currentQuestion <= 0) {
        return;
    }


    currentQuestion--;

    loadQuestion();
}


// =====================================================
// SKIP
// =====================================================

function skipQuestion() {

    if (
        selectedAnswers[currentQuestion] !== null
    ) {
        return;
    }

    if (answerShown[currentQuestion]) {
        return;
    }


    selectedAnswers[currentQuestion] =
        null;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        finishQuiz();

        return;
    }


    currentQuestion++;

    loadQuestion();
}


// =====================================================
// FINISH QUIZ
// =====================================================

function finishQuiz() {

    if (isFinishing) {
        return;
    }

    isFinishing = true;


    let correct = 0;
    let wrong = 0;
    let skipped = 0;


    for (
        let i = 0;
        i < questions.length;
        i++
    ) {

        const selected =
            selectedAnswers[i];

        const correctAnswer =
            questions[i].answer;


        if (selected === null) {

            skipped++;

        }

        else if (
            selected === correctAnswer
        ) {

            correct++;

        }

        else {

            wrong++;
        }
    }


    const total =
        questions.length;

    const percentage =
        Math.round(
            (correct / total) * 100
        );


    const reportData = {

        subject:
            selectedSubject,

        set:
            setNumber,

        total:
            total,

        score:
            correct,

        correct:
            correct,

        wrong:
            wrong,

        skipped:
            skipped,

        percentage:
            percentage,

        questions:
            questions,

        selectedAnswers:
            selectedAnswers
    };


    localStorage.setItem(
        "quizReport",
        JSON.stringify(reportData)
    );


    window.location.href =
        "report.html";
}


// =====================================================
// BUTTON EVENTS
// =====================================================

optionButtons.forEach(
    function(button, index) {

        button.addEventListener(
            "click",
            function() {

                selectOption(index);
            }
        );
    }
);


previousBtn.addEventListener(
    "click",
    previousQuestion
);


skipBtn.addEventListener(
    "click",
    skipQuestion
);


showAnswerBtn.addEventListener(
    "click",
    showCorrectAnswer
);


nextBtn.addEventListener(
    "click",
    nextQuestion
);


// =====================================================
// START QUIZ
// =====================================================

loadQuestion();