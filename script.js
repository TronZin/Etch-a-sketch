const button = document.querySelector("button");
const input = document.querySelector("input");
const canvas = document.querySelector(".canvas");

setCanvasGrid(16);
button.addEventListener('click',() =>{setCanvasGrid(input.value)});




function setCanvasGrid(number) {
    if (number > 100 || number < 16) number = 16;

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
            square.style.width = "100%";
            square.style.height = "100%";
        } 
    }
}

