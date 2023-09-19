const clickOne = document.querySelector(".page-1")
const clickTwo = document.querySelector(".page-2")
const messageTextP = document.querySelector("#phrases")
const button = document.querySelector("button")

const randomMessages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", 
    "Tenha cuidado com o que você pensa, pois a sua vida é dirigida pelos seus pensamentos.",
    "Entreguem todas as suas preocupações a Deus, pois ele cuida de vocês.", 
    "Sonhos são caminhos construídos pelo coração.",
    "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.", 
    "Tenha coragem para se tornar aquilo que sonha.", 
    "A vida retribui quem pensa positivo.",
    "Não foque em ser ocupado, foque em ser produtivo.",
    "Motivação é aquilo que te faz começar. Habito é aquilo que te faz continuar.",
    "Mesmo que a jornada seja lenta, abrir mão não acelera."] 

function getRandomMessages() {
    const numberPhrases = Math.round(Math.random() * 9)
    return randomMessages[numberPhrases];
}
function message() {
    messageTextP.innerText = getRandomMessages() 
    clickOne.classList.add("hiddenOn")
    clickTwo.classList.remove("hiddenOn")
}
button.addEventListener('click', function() {
    clickOne.classList.remove("hiddenOn")
    clickTwo.classList.add("hiddenOn")
})