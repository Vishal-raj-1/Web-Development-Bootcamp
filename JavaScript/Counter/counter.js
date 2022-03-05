const decButton = document.getElementById('decButton')
const incButton = document.getElementById('incButton')
const zeroButton = document.getElementById('zeroButton')
const spanNumber = document.getElementById('number');
let num = 0;

decButton.addEventListener('click', () => {
    num--;
    spanNumber.innerText = num;
})

incButton.addEventListener('click', () => {
    num++;
    spanNumber.innerText = num;
})

zeroButton.addEventListener('click', () => {
    num = 0;
    spanNumber.innerText = num;
})