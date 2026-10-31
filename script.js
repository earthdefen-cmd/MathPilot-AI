function solveProblem() {
    const question = document.querySelector("textarea").value.trim();
    const answer = document.querySelector(".answer p");

    if (question === "") {
        answer.textContent = "Please enter a question.";
        return;
    }

    const expression = question.replace(/\s+/g, "");

    if (!/^\d+(\.\d+)?[+\-*/]\d+(\.\d+)?$/.test(expression)) {
        answer.textContent = "Please enter a calculation like 25 + 12.";
        return;
    }

    const match = expression.match(
        /^(\d+(?:\.\d+)?)([+\-*/])(\d+(?:\.\d+)?)$/
    );

    const first = Number(match[1]);
    const operator = match[2];
    const second = Number(match[3]);

    let result;
    let explanation = "";

    if (operator === "+") {
        result = first + second;
        explanation = `${first} + ${second} = ${result}`;
    }

    else if (operator === "-") {
        result = first - second;
        explanation = `${first} - ${second} = ${result}`;
    }

    else if (operator === "*") {
        result = first * second;
        explanation = `${first} × ${second} = ${result}`;
    }

    else if (operator === "/") {
        if (second === 0) {
            answer.textContent = "You cannot divide by zero.";
            return;
        }

        result = first / second;
        explanation = `${first} ÷ ${second} = ${result}`;
    }

    answer.innerHTML = `
        <strong>Question:</strong> ${first} ${operator} ${second}<br><br>
        <strong>Step-by-step solution:</strong><br>
        1. Identify the two numbers: ${first} and ${second}.<br>
        2. Identify the operation: ${operator}.<br>
        3. Calculate: ${explanation}.<br><br>
        <strong>Final answer: ${result}</strong>
    `;
}
let currentMode = "learn";

function setMode(mode) {
    currentMode = mode;

    const message = document.getElementById("mode-message");

    if (mode === "learn") {
        message.textContent =
            "Learn Mode: Get detailed, step-by-step explanations and understand mathematics.";
    }

    else if (mode === "quick") {
        message.textContent =
            "Quick Solve: Get fast answers with concise working.";
    }
}
