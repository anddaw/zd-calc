function addNumericButtons() {

    function addButton(innerText) {
        let buttonsDiv = document.getElementById('main-button-bar');
        let button = document.createElement("BUTTON");
        buttonsDiv.appendChild(button);
        button.className = "button";
        button.innerText = innerText;
        button.addEventListener('click', (el) => {alert(innerText)});
    }

    let i;
    for (i = 1; i <= 9; ++i) {
        addButton(i)
    }
    addButton(0)
    addButton('.')

}

addNumericButtons()

