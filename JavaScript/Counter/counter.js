const decButton = document.getElementById('decButton')
const incButton = document.getElementById('incButton')
const randomButton = document.getElementById('randomButton')
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

randomButton.addEventListener('click', () => {
    num = Math.floor(Math.random()*1000);
    spanNumber.innerText = num;
})

zeroButton.addEventListener('click', () => {
    num = 0;
    spanNumber.innerText = num;
})