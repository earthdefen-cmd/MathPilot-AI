function solveProblem() {
    const question = document.querySelector("textarea").value;
    const answer = document.querySelector(".answer p");

    if (question.trim() === "") {
        answer.textContent = "Please enter a question.";
        return;
    }

    try {
        const expression = question.replace(/\s+/g, "");

        if (!/^[0-9+\-*/().]+$/.test(expression)) {
            answer.textContent = "Please enter a valid basic maths calculation.";
            return;
        }

        const result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            answer.textContent = "This calculation has no valid answer.";
            return;
        }

        answer.textContent = "Answer: " + result;

    } catch (error) {
        answer.textContent = "Invalid calculation. Please try again.";
    }
}
