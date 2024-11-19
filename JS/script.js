/* Style Switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", () => {
    if(document.querySelector("style-switcher").classList.contains("open")) {
        document.querySelector("style-switcher").classList.remove("open");
    }
})
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
/* Typing */
var typed = new Typed('.typing', {
    strings: ["Summer", "Winter", "Autumn", "Spring"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
/* Theme Switcher */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
/* Theme Icon Switcher*/
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
/* Audio Time Tracker */
let soundPlayed = false; 
function playButtonSound() {
    if (!soundPlayed) { 
        const sound = document.getElementById("button-sound");
        sound.currentTime = 0; 
        sound.play();
        soundPlayed = true; 
        setTimeout(() => {
                sound.pause();
                sound.currentTime = 0; 
                soundPlayed = false;
        }, 2000);
    }
}
document.querySelector('.btn.contact-me').addEventListener('click', playButtonSound);
/* Checking Cantact Section */
document.querySelector(".btn.send").addEventListener("click", function (event) {
    event.preventDefault(); 
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");
    let hasError = false;
    if (name.value.trim() === "") {
        showError(name, "Введите ваше имя");
        hasError = true;
    }
    if (!isValidEmail(email.value)) {
        showError(email, "Введите вашу почту");
        hasError = true;
    }
    if (subject.value.trim() === "") {
        showError(subject, "Введите тему вашего вопроса");
        hasError = true;
    }
    if (message.value.trim() === "") {
        showError(message, "Введите ваше сообщение");
        hasError = true;
    }
    if (!hasError) {
        alert("Форма успешно отправлена!");
    }
});
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function showError(input, message) {
    const errorMessage = input.parentNode.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";           
}
/* Image Blink Animation */
document.getElementById('blinkImage').addEventListener('click', function() {
    this.classList.add('blinking');
    setTimeout(() => {
        this.classList.remove('blinking');
    }, 1000);
});
/* Infinitely Escaping Button */
const button = document.querySelector('.escape-button');
function moveButton() {
    const randomX = Math.floor(Math.random() * 400); 
    const randomY = Math.floor(Math.random() * 200); 
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
button.addEventListener('mouseenter', moveButton);
