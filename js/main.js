

const elementArea = document.querySelector('[data-txt-area]');
const elementCounter = document.querySelector('[data-counter]');
const elementWords = document.querySelector('[data-words]');

elementArea.addEventListener('input', event => {

    const elementTotalCounter = event.target.value.length;
    const elementTotalWords = elementArea.value.split(' ').length - 1;

          elementCounter.innerText = `${elementTotalCounter}`;
          elementWords.innerText = `${elementTotalWords}`;

    adicionarClass();
});


function adicionarClass() {

    if (elementArea.value === '') {
        elementCounter.classList.add('colorRed');
        elementWords.classList.add('colorRed');
    } else {
        elementCounter.classList.remove('colorRed');
        elementWords.classList.remove('colorRed');
    }
}
