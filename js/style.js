let buttonNext = document.getElementById("next")
let buttonBack = document.getElementById("back")
let firstForm = document.getElementById("first-form")
let secForm = document.getElementById("sec-form")

buttonNext.addEventListener('click', function() {
    secForm.style.display = "block";
})

buttonBack.addEventListener('click', function() {
    secForm.style.display = "none";
})