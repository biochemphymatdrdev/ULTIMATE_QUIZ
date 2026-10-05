// ==========================================
// ULTIMATE QUIZ - REPORT
// ==========================================


/* =========================================================
   READ SAVED QUIZ REPORT
========================================================= */

let reportData = null;


try {

    const savedReport =
        localStorage.getItem(
            "quizReport"
        );


    if (savedReport) {

        reportData =
            JSON.parse(savedReport);
    }

} catch (error) {

    console.error(
        "Could not read quiz report:",
        error
    );
}


/* =========================================================
   CHECK REPORT DATA
========================================================= */

if (
    !reportData ||
    !Array.isArray(
        reportData.selectedAnswers
    )
) {

    document.body.innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:25px;
            background:#182638;
            color:white;
            font-family:Arial,sans-serif;
            text-align:center;
        ">

            <div>

                <h2>
                    Quiz report could not be loaded.
                </h2>

                <p style="
                    margin-top:12px;
                    opacity:0.8;
                ">
                    Please complete a quiz first.
                </p>

            </div>

        </div>
    `;

    throw new Error(
        "quizReport is missing or invalid."
    );
}


/* =========================================================
   READ BASIC INFORMATION
========================================================= */

const subject =
    reportData.subject ||
    "Physics";


const set =
    Number(
        reportData.set
    ) || 1;


const total =
    Number(
        reportData.total
    ) ||
    reportData.selectedAnswers.length;


/* =========================================================
   GET QUESTIONS
========================================================= */

const questions =
    Array.isArray(
        reportData.questions
    )
        ? reportData.questions
        : [];


const selectedAnswers =
    reportData.selectedAnswers;


/* =========================================================
   CALCULATE RESULTS AGAIN
========================================================= */

/*
   We calculate everything again here
   instead of blindly trusting stored
   numbers.

   This gives the report one reliable
   source of truth:

   selectedAnswers + questions
*/


let correct = 0;

let wrong = 0;

let skipped = 0;


for (
    let i = 0;
    i < selectedAnswers.length;
    i++
) {

    const selected =
        selectedAnswers[i];


    /*
       NULL = SKIPPED
    */

    if (
        selected === null ||
        typeof selected === "undefined"
    ) {

        skipped++;

        continue;
    }


    /*
       Selected answer exists.
       Therefore it is NOT skipped.
    */

    if (
        questions[i] &&
        selected === questions[i].answer
    ) {

        correct++;

    } else {

        wrong++;
    }
}


/* =========================================================
   TOTAL
========================================================= */

const actualTotal =
    selectedAnswers.length;


/* =========================================================
   PERCENTAGE
========================================================= */

const percentage =
    actualTotal > 0
        ? Math.round(
            (correct / actualTotal) * 100
        )
        : 0;


/* =========================================================
   ELEMENTS
========================================================= */

const subjectInfo =
    document.getElementById(
        "subjectInfo"
    );

const percentageElement =
    document.getElementById(
        "percentage"
    );

const correctElement =
    document.getElementById(
        "correct"
    );

const wrongElement =
    document.getElementById(
        "wrong"
    );

const skippedElement =
    document.getElementById(
        "skipped"
    );

const scoreElement =
    document.getElementById(
        "score"
    );


/* =========================================================
   DISPLAY SUBJECT / SET
========================================================= */

subjectInfo.textContent =
    subject.toUpperCase() +
    " • SET " +
    String(set).padStart(2, "0");


/* =========================================================
   DISPLAY PERCENTAGE
========================================================= */

percentageElement.textContent =
    percentage + "%";


/* =========================================================
   DISPLAY CORRECT
========================================================= */

correctElement.textContent =
    correct;


/* =========================================================
   DISPLAY WRONG
========================================================= */

wrongElement.textContent =
    wrong;


/* =========================================================
   DISPLAY SKIPPED
========================================================= */

skippedElement.textContent =
    skipped;


/* =========================================================
   DISPLAY SCORE
========================================================= */

scoreElement.textContent =
    correct +
    " / " +
    actualTotal;


/* =========================================================
   PERFORMANCE MESSAGE
========================================================= */

const emoji =
    document.getElementById(
        "performanceEmoji"
    );

const message =
    document.getElementById(
        "message"
    );


if (
    percentage >= 90
) {

    emoji.textContent =
        "🏆";

    message.textContent =
        "Excellent work! Your knowledge is really showing.";

}
else if (
    percentage >= 75
) {

    emoji.textContent =
        "🔥";

    message.textContent =
        "Great job! You are building strong knowledge.";

}
else if (
    percentage >= 50
) {

    emoji.textContent =
        "👍";

    message.textContent =
        "Good effort! Keep practicing and improving.";

}
else {

    emoji.textContent =
        "💪";

    message.textContent =
        "Keep learning! Every question is another step forward.";
}


/* =========================================================
   RETAKE SET
========================================================= */

document.getElementById(
    "retakeBtn"
).addEventListener(
    "click",
    function() {

        /*
           selectedSubject and selectedSet
           remain in localStorage, so the
           same set can be opened again.
        */

        window.location.href =
            "quiz.html";
    }
);


/* =========================================================
   BACK TO SETS
========================================================= */

document.getElementById(
    "setsBtn"
).addEventListener(
    "click",
    function() {

        window.location.href =
            "sets.html";
    }
);


/* =========================================================
   BACK TO TOPICS
========================================================= */

document.getElementById(
    "topicsBtn"
).addEventListener(
    "click",
    function() {

        window.location.href =
            "topics.html";
    }
);