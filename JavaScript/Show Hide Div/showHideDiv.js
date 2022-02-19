// Exercise 1: show/hide button
const hideButton = document.getElementById('hideButton');
const para = document.querySelector('#para');

hideButton.addEventListener('click', function(){
    if(para.style.display === "none"){
        hideButton.innerText = "Hide"
        para.style.display = "block"
    }
    else{
        hideButton.innerText = "show"
        para.style.display = "none"
    }
});
