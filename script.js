
const card = document.querySelector(".try");
const message = document.createElement("h3");
message.textContent = 'try again';

document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    document.querySelector('.parallax-image').style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)';
});

var audio = new Audio('yippee-tbh.mp3');
function play1() {
  audio.play();
}

function nextpage() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "java";

    if(attempt == password1){
        window.location = "cspz1.html"
    }
    else {
        card.appendChild(message);
    }
    
}

function nextpage1() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "python";

    if(attempt == password1){
        window.location = "szpz2.html"
    }
    else {
        card.appendChild(message);
    }
    
}

function nextpage2() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "perl";

    if(attempt == password1){
        window.location = "cspl2.html"
    }
    else {
        card.appendChild(message);
    }
    
}

function nextpage3() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "javascript";

    if(attempt == password1){
        window.location = "problast.html"
    }
    else {
        card.appendChild(message);
    }
    
}

function nextpage4() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "webdev";

    if(attempt == password1){
        window.location = "goodlucklol.html"
    }
    else {
        card.appendChild(message);
    }
    
}

function nextpage5() {
    let attempt = document.getElementById("pass1").value;
    let password1 = "function";

    if(attempt == password1){
        window.location = "winPage.html"
    }
    else {
        card.appendChild(message);
    }
    
}
/** 
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
*/