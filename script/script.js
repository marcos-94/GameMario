let cano = document.querySelector(".cano");
let mario = document.querySelector(".mario");
let nuvens = document.querySelector(".nuvens");
let gameOver = document.querySelector(".gameOver");
let btn = document.querySelector(".btn");

// Pulo
function pulo(){
    mario.classList.add("pular");
    setTimeout(()=>{
        mario.classList.remove("pular");
    }, 700);
};

// Pontos
let sec = 00;
function watch(){
    sec++;
    document.querySelector(".pontos").innerHTML = sec;
};

let pontos = setInterval(watch,1000);

let loop = setInterval(()=>{
    let posicaoDoCano = cano.offsetLeft;
    let posicaoDasNuvens = nuvens.offsetLeft;
    let posicaoDoMario = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(posicaoDoCano <= 70 && posicaoDoCano > 1 && posicaoDoMario <= 85){
        cano.style.animation = "none";
        cano.style.left = `${posicaoDoCano}px`;
        
        mario.style.animation = "none";
        mario.src = "./assets/game-over.png";
        mario.style.bottom = `${posicaoDoMario}px`;
        mario.style.left = "20px";
        mario.style.width = "40px";
        
        nuvens.style.left = `${posicaoDasNuvens}px`;
        nuvens.style.animation = "none";

        gameOver.style.display = "flex";
        clearInterval(loop);
        clearInterval(pontos);

        setTimeout(()=>{
            alert(`Você fez ${sec} pontos!`);
        }, 100);
    };
    
});

function reiniciarGame(){
    window.location.reload(true);
};

btn.addEventListener("click",reiniciarGame);
document.addEventListener("keydown", pulo);