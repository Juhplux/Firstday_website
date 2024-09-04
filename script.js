
const card = document.querySelector(".try");
const message = document.createElement("h3");
message.textContent = 'try again';

document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    document.querySelector('.parallax-image').style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)';
});

function nextpage() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "java";

    if(attempt == password1){
        window.location = "2ndpage.html"
    }
    else {
        card.appendChild(message);
    }
    
}

function nextpage1() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "python";

    if(attempt == password1){
        window.location = "winPage.html"
    }
    else {
        card.appendChild(message);
    }
    
}

var yippee = document.getElementById("clicker");

yippee.addEventListener("click", function() {
    let x = localStorage.getItem("clickCount") || 0;
    x = parseInt(x) + 1;
    localStorage.setItem("clickCount", x);
});

window.addEventListener("DOMContentLoaded", function() {
    const numClicked = document.querySelector("#numclicked");
    let subDisplay = document.createElement("h3");
    subDisplay.classList.add("subDisplay");

    let x = localStorage.getItem("clickCount") || 0;
    subDisplay.textContent = "Yippee man has been clicked " + x + " times";
    
    numClicked.appendChild(subDisplay);
});
