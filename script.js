const button = document.querySelector("button");
const input = document.querySelector("input");
const canvas = document.querySelector(".canvas");
const colors = document.querySelectorAll(".color");
const customColor = document.querySelector(".customColor");
const colorGenerator = document.querySelector(".generator");




button.addEventListener('click',() =>{setCanvasGrid(input.value)});


let colorInUse = "black";
colors.forEach(color => color.addEventListener("click",selectColor));

colorGenerator.addEventListener("input",(e)=>{customColor.style.backgroundColor = e.target.value});
colorGenerator.addEventListener("change",(e) => {colorInUse = e.target.value});

setCanvasGrid(16);

function setCanvasGrid(number) {
    if (number > 100 || number < 16) number = 16;
    input.value = "";

    let frSize = "";
    for (let i = 0; i < number; i++) {
        frSize += "1fr";
    }
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = frSize;
    canvas.style.gridTemplateRows = frSize;

    for (let i = 0; i < number; i++){
        for (let j = 0; j < number; j++){
            let square = document.createElement("div");
            canvas.appendChild(square);

            square.style.gridRowStart = j;
            square.style.gridRowEnd   = j+1;

            square.style.gridColumnStart = i;
            square.style.gridColumnEnd   = i+1;
            
            square.style.alignSelf = "center";
            square.style.justifySelf = "center";

            square.style.width = "100%";
            square.style.height = "100%";
            
            
            square.addEventListener("mouseover",paintSquare);
        } 
    }
}

function paintSquare(e) {
         if (e.shiftKey) e.target.style.backgroundColor = colorInUse;
    else if (e.altKey) e.target.style.backgroundColor = RainbowColor(e);
    else if (e.ctrlKey) return;
}

function RainbowColor(e) {
    switch (getRandomInt(7)) {
        case 0: return "red";
        case 1: return "orangered";
        case 2: return "yellow";
        case 3: return "lawngreen";
        case 4: return "blue";
        case 5: return "indigo";
        case 6: return "fuchsia";
    }
}

function selectColor(e) {
    colorInUse = window.getComputedStyle(e.target).backgroundColor;
    customColor.style.backgroundColor = colorInUse;
}

//window.addEventListener("keydown",(e)=>{console.log(e.keyCode);})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
