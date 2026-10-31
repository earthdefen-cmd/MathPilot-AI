function solveProblem() {
    const question = document.querySelector("textarea").value;

    const answer = document.querySelector(".answer p");

    if (question.trim() === "") {
        answer.textContent = "Please enter a mathematics question first.";
        return;
    }

    answer.textContent = "Your question: " + question +
        " | Our mathematics solver is coming soon!";
}
