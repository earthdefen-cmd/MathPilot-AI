
let currentMode = "learn";

function solveProblem() {
    const question = document.querySelector("textarea").value.trim();
    const answer = document.querySelector(".answer p");

    if (!question) {
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
    let explanation;

    switch (operator) {
        case "+":
            result = first + second;
            explanation = `${first} + ${second} = ${result}`;
            break;

        case "-":
            result = first - second;
            explanation = `${first} - ${second} = ${result}`;
            break;

        case "*":
            result = first * second;
            explanation = `${first} × ${second} = ${result}`;
            break;

        case "/":
            if (second === 0) {
                answer.textContent = "You cannot divide by zero.";
                return;
            }
            result = first / second;
            explanation = `${first} ÷ ${second} = ${result}`;
            break;
    }

    if (currentMode === "quick") {
        answer.textContent =
            `Quick Answer\n\n${first} ${operator} ${second} = ${result}\n\nFinal answer: ${result}`;
    } else {
        answer.textContent =
            `Question: ${first} ${operator} ${second}\n\n` +
            `Step-by-step solution:\n` +
            `1. Identify the two numbers: ${first} and ${second}.\n` +
            `2. Identify the operation: ${operator}.\n` +
            `3. Calculate: ${explanation}.\n\n` +
            `Final answer: ${result}`;
    }
}
