let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","prurple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
})

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose (0-3 index,btns array)
    let randomInd = Math.floor(Math.random() * 3);
    let randomColor = btns[randomInd];
    let randomBtn = document.querySelector(`.${randomColor}`);

    btnFlash(randomBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}