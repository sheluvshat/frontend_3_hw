
function moveSmallBlock(direction, position) {
    const smallBlock = document.getElementById("small-block");
    const bigBlockWidth = 500;
    const bigBlockHeight = 500;
    const smallBlockWidth = 50;
    const smallBlockHeight = 50;

    if (direction === "right") {
        if (position < bigBlockWidth - smallBlockWidth) {
            smallBlock.style.left = position + "px";
            setTimeout(function () {
                moveSmallBlock("right", position + 10);
            }, 100);
        } else {
            moveSmallBlock("down", 0);
        }
    } else if (direction === "down") {
        if (position < bigBlockHeight - smallBlockHeight) {
            smallBlock.style.top = position + "px";
            setTimeout(function () {
                moveSmallBlock("down", position + 10);
            }, 100);
        } else {
            moveSmallBlock("left", bigBlockWidth - smallBlockWidth);
        }
    } else if (direction === "left") {
        if (position > 0) {
            smallBlock.style.left = position + "px";
            setTimeout(function () {
                moveSmallBlock("left", position - 10);
            }, 100);
        } else {
            moveSmallBlock("up", bigBlockHeight - smallBlockHeight);
        }
    } else if (direction === "up") {
        if (position > 0) {
            smallBlock.style.top = position + "px";
            setTimeout(function () {
                moveSmallBlock("up", position - 10);
            }, 100);
        } else {
            moveSmallBlock("right", 0);
        }
    }
}

moveSmallBlock("right", 0);



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





