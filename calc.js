let display = document.getElementById('display-field');
let memory_value;
let previous_value;
let calc_operation;
let clear_display_flag;

function init() {
    memory_value = 0;
    previous_value = 0;
    display.value = '0';
    calc_operation = (x, y) => {return y};
    clear_display_flag = false;
}

function updateDisplay(val) {
    if (clear_display_flag) {
        display.value = '0';
        clear_display_flag = false;
    }

    switch (val) {
        case '.':
            if (display.value.indexOf('.') === -1) {
                display.value = display.value + '.';
            }
            break;
        default:
            if (display.value === '0') {
                display.value = val;
            } else {
                display.value = display.value + val
            }
    }
}

function set_operation(op) {
    previous_value = parseFloat(display.value);
    clear_display_flag = true;
    calc_operation = op;
}

function execute() {
    display.value = calc_operation(previous_value, parseFloat(display.value));
    clear_display_flag = true;
    calc_operation = (x, y) => {return y};
}

function addButton(innerText) {
    let buttonsDiv = document.getElementById('main-button-bar');
    let button = document.createElement("BUTTON");
    buttonsDiv.appendChild(button);
    button.className = "button";
    button.innerText = innerText;
    button.addEventListener('click', () => {updateDisplay(innerText);});
}

function memoryAdd() {
    memory_value += parseFloat(display.value)
}

function memoryRecall() {
    display.value = memory_value;
    clear_display_flag = true;
}

for (let i = 1; i <= 9; ++i) addButton(i);
addButton(0);
addButton('.');

document.getElementById('btn-ac')
    .addEventListener('click', () => {init()});
document.getElementById('btn-add').addEventListener("click", () => {
    set_operation((x, y) => {return x + y})
});
document.getElementById('btn-sub').addEventListener("click", () => {
    set_operation((x, y) => {return x - y})
});
document.getElementById('btn-mul').addEventListener("click", () => {
    set_operation((x, y) => {return x * y})
});
document.getElementById('btn-div').addEventListener("click", () => {
    set_operation((x, y) => {return x / y})
});
document.getElementById("btn-exe").addEventListener("click", execute);
document.getElementById("btn-mp").addEventListener("click", memoryAdd);
document.getElementById("btn-mr").addEventListener("click", memoryRecall);
init();

