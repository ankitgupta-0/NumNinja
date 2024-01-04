let input = document.getElementById("input");

function addToInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = "";
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error";
    }
}