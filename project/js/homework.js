function moveBlock(position) {
    const block = document.getElementById("block");
    block.style.left = position + "px";

    if (position < 450) {
        setTimeout(function () {
            moveBlock(position + 10);
        }, 100);
    }
}

moveBlock(0);


function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var resultElement = document.getElementById('result');
    var email = emailInput.value.trim();
    var gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

    if (gmailRegExp.test(email)) {
        resultElement.innerHTML = 'Валидный Gmail-адрес';
        resultElement.className = 'valid';
    } else {
        resultElement.innerHTML = 'Невалидный Gmail-адрес';
        resultElement.className = 'invalid';
    }
}

var emailInput = document.getElementById('emailInput');
emailInput.addEventListener('input', validateEmail);


