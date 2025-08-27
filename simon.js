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
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose (0-3 index,btns array)
    let randomInd = Math.floor(Math.random() * 3);
    let randomColor = btns[randomInd];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    // console.log(gameSeq);

    gameFlash(randomBtn);
}

function checkAns(idx){
    // console.log("Current level : ", level);

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },250);

        reset();
    }
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function btnPress(){
    let btn = this;
    // console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}