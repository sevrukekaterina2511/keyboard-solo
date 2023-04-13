const container = document.querySelector('.word');
const arr = ["grapefruit", "pomelo", "lemon", "apple", "peach", "orange", "pear"];

function getRandomWord() {

    const words = Math.floor(Math.random() * 7);
    const word = arr[words];
    const fragment = new DocumentFragment();

    for (let symbol of word) {
        const symbolContainer = document.createElement('span');
        symbolContainer.textContent = symbol;
        fragment.append(symbolContainer);
    }
    container.append(fragment);
}
getRandomWord();

let i = 0;

const inputValidation = function(event) {
    const span = container.querySelectorAll('span');
    const spanElement = Array.from(span);

    if (event.key == spanElement[i].textContent) {
        spanElement[i].classList.remove('w');
        spanElement[i].classList.add('c');
        i++;
    } else {
        spanElement[i].classList.remove('c');
        spanElement[i].classList.add('w');
    }
}

document.addEventListener('keydown', inputValidation);