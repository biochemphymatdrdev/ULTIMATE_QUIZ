const topics = [
    "Science",
    "Social Science",
    "Mathematics",
    "G.K. / G.S.",
    "Languages"
];

const topicList = document.getElementById("topicList");

topics.forEach(function(topic) {

    const button = document.createElement("button");

    button.className = "topic-button";

    // Add icons
    if (topic === "Science") {
        button.textContent = "🔬 SCIENCE";
    }
    else if (topic === "Social Science") {
        button.textContent = "🌍 SOCIAL SCIENCE";
    }
    else if (topic === "Mathematics") {
        button.textContent = "➗ MATHEMATICS";
    }
    else if (topic === "G.K. / G.S.") {
        button.textContent = "🧠 G.K. / G.S.";
    }
    else if (topic === "Languages") {
        button.textContent = "🗣️ LANGUAGES";
    }

    button.addEventListener("click", function() {

        localStorage.setItem("selectedTopic", topic);

        window.location.href = "subject.html";

    });

    topicList.appendChild(button);
});