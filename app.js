const playBoard = document.querySelector(".play-board");

let foodX =13, foodY = 10;
let snakeX = 5, snakeY =10;
let velocityX=0, velocityY=0;
let snakeBody = [];
const changeFoodPosition = () => {

    foodX = Math.floor(Math.random()*30)+1;
    foodY = Math.floor(Math.random()*30)+1;

}

const changeDirection = (e) => {
    if(e.key === "ArrowUp"){
        velocityX=0
        velocityY=-1
    }
    else if(e.key === "ArrowDown"){
        velocityX=0
        velocityY=1
    }
    else if(e.key === "ArrowLeft"){
        velocityX=-1
        velocityY=0
    }
    if(e.key === "ArrowRight"){
        velocityX=1
        velocityY=0
    }
    intiGame();
}

const intiGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;
    if (snakeX===foodX && snakeX===foodX){
        changeFoodPosition()
        snakeBody.push([foodX, foodY]);
        console.log(snakeBody)
    }

    for (let i= snakeBody.length-1;i>0;i--){
        snakeBody[i] = snakeBody[i-1]

    }
    snakeBody[0]=[snakeX,snakeY]
    snakeX+=velocityX
    snakeY+=velocityY

    for (let i=0; i< snakeBody.length;i++){
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;    
    }
    
    
    playBoard.innerHTML=htmlMarkup;
}

changeFoodPosition()
setInterval(intiGame,125);
document.addEventListener("keydown",changeDirection);