const selectedSubject =
    localStorage.getItem("selectedSubject");

const pageTitle =
    document.getElementById("pageTitle");

const setList =
    document.getElementById("setList");


// Number of sets for every subject

const setCounts = {

    "Physics": 10,
    "Chemistry": 10,
    "Biology": 10,

    "Geography": 2,
    "History": 2,
    "Political Science": 2,
    "Economics": 2,
    "Sociology": 2,

    "Mathematics": 10,
    "G.K. / G.S.": 10,

    "Hindi": 2,
    "English": 2,
    "Sanskrit": 6

};


// Display heading

if (selectedSubject && setCounts[selectedSubject]) {

    pageTitle.textContent =
        selectedSubject.toUpperCase() + " SETS";


    const totalSets =
        setCounts[selectedSubject];


    for (let i = 1; i <= totalSets; i++) {

        const button =
            document.createElement("button");

        button.className = "set";

        button.textContent =
            "SET " + String(i).padStart(2, "0");


        button.onclick = function () {

            localStorage.setItem(
                "selectedSet",
                i
            );

            window.location.href =
                "quiz.html";

        };


        setList.appendChild(button);
    }

}


// Invalid subject

else {

    pageTitle.textContent =
        "⚠️ SUBJECT NOT FOUND";

}


// Back to subject screen

function goBack() {

    window.location.href =
        "subject.html";

}