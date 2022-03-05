const hideButton = document.getElementById('hideButton');
const para = document.querySelector('#para');

hideButton.addEventListener('click', function(){
    if(para.style.display === "none"){
        hideButton.innerText = "Hide Card"
        para.style.display = "block"
    }
    else{
        hideButton.innerText = "Show Card"
        para.style.display = "none"
    }
});
