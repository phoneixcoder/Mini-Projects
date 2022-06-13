"use strict";

const block = document.getElementById('block');
const hole = document.getElementById('hole');
const character = document.getElementById('character');
const scoreBoard = document.getElementById('display-score');

let jumping = 0;
let counter = 0;

// step - 1 : Basically we are adding random spapces inside the block

hole.addEventListener('animationiteration', () =>{
    let random = -((Math.random()*300) + 150);
    hole.style.top = random + "px";
    counter++;
    scoreBoard.innerHTML(counter - 1);
});


// step - 2 : Basically this set is for the score evaluation , to create gravity.

setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+4)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);
    
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-6)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}