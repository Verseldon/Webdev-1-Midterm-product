let display = document.getElementById('display');

function appendToDisplay(value) {
    const lastChar = display.value[display.value.length - 1];
    const operators = ['+', '-', '*', '/'];
    
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }
    
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(display.value);

        if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}
