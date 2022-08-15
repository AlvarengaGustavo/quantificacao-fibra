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

let backboneSec = document.getElementById("backbone-sec")
let inputRadioSim = document.getElementById("backbone-first-sim")
let inputRadioNao = document.getElementById("backbone-first-nao")

backboneSec.style.display = "none";
inputRadioNao.addEventListener('click', function() {
    backboneSec.style.display = "none";
})

inputRadioSim.addEventListener('click', function() {
    backboneSec.style.display = "grid";
})