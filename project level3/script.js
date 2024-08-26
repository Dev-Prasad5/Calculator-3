let currentInput = '';

function appendToDisplay(value) {
    // Prevent multiple decimal points in a single number
    if (value === '.' && currentInput.split(/[\+\-\*\/]/).pop().includes('.')) {
        return;
    }
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById("display").value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("display").value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}