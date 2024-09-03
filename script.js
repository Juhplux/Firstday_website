
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

