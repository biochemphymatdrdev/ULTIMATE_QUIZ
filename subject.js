const selectedTopic = localStorage.getItem("selectedTopic");

const pageTitle = document.getElementById("pageTitle");
const subjectList = document.getElementById("subjectList");

const subjects = {

    "Science": [
        "Physics",
        "Chemistry",
        "Biology"
    ],

    "Social Science": [
        "Geography",
        "History",
        "Political Science",
        "Economics",
        "Sociology"
    ],

    "Mathematics": [
        "Mathematics"
    ],

    "G.K. / G.S.": [
        "G.K. / G.S."
    ],

    "Languages": [
        "Hindi",
        "English",
        "Sanskrit"
    ]

};


// Set page heading
if (selectedTopic) {
    pageTitle.textContent = selectedTopic.toUpperCase();
} else {
    pageTitle.textContent = "SUBJECTS";
}


// Get subjects belonging ONLY to selected topic
const selectedSubjects = subjects[selectedTopic] || [];


// Create subject buttons
selectedSubjects.forEach(function(subject) {

    const button = document.createElement("button");

    button.className = "subject-button";
    button.textContent = subject;

    button.addEventListener("click", function() {

        // Save selected subject
        localStorage.setItem("selectedSubject", subject);

        // Go to SETS page
        window.location.href = "sets.html";

    });

    subjectList.appendChild(button);

});


// Back button
function goBack() {

    window.location.href = "topics.html";

}