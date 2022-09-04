const dino = document.getElementById("dino");
const cacto = document.getElementById("cacto");

function jump(){
    if(dispatchEvent.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300)
    }
}

let verifVida = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));

    if(cactoLeft > 0 && cactoLeft < 70 && dinoTop >= 143){
        dino.style.animationPlayState = 'paused';
        cacto.style.animationPlayState = 'paused';
        alert("Você perdeu :/");
        window.location.reload();
    }
}, 10);

document.addEventListener("keydown", function(event){
    jump();
})