const button = document.querySelector("button");
const input = document.querySelector("input");
const canvas = document.querySelector(".canvas");
const colors = document.querySelectorAll(".color");
const customColor = document.querySelector(".customColor");

setCanvasGrid(16);
button.addEventListener('click',() =>{setCanvasGrid(input.value)});
colors.forEach(color => color.addEventListener("click",selectColor));




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
    if (!e.shiftKey) return;

    e.target.style.backgroundColor = colorInUse;
}

let colorInUse = "black";

function selectColor(e) {
    colorInUse = window.getComputedStyle(e.target).backgroundColor;
    customColor.style.backgroundColor = colorInUse;
}
