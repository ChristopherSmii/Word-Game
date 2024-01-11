let arrayTitle="Word Game";
var answerWord="hi";
let titleValue=true;
let arrayRandomWords=[
'jacket',
'glitter',
'harmony',
'freedom',
'lantern',
'velvet',
'breeze',
'crimson',
'twilight',
'horizon',
'whisper',
'orbital',
'puzzled',
'scribble',
'juniper',
'stellar',
'echoes',
'sizzle',
'flaming',
'tranquil',
'fractal',
'blizzard',
'uplifts',
'quantum',
'trickle',
'dazzled',
'venture',
'harmony',
'mirage',
'tangerine',
'serenade',
'cerulean',
'marzipan',
'pinnacle',
'blossom',
'saffron',
'verdant',
'mysterious',
'obsidian',
'whispers',
];

//Title
function sounds(value){
    let shortAudio=new Audio('./click-button-140881.mp3');
    let longAudio=new Audio('./typing-sound-effect-117679.mp3');
    if(value){
        shortAudio.play();
    }
    else{
        longAudio.play();
    }
    
}
function titleWrite(){
    for(let i=0;i<document.querySelectorAll(".titleLetter").length;i++){
        let time=setTimeout(function(){
            document.querySelectorAll(".titleLetter")[i].innerHTML=arrayTitle[i];
        },(600*i+(600)));
    }
}

titleWrite();

//lifePoints
let lifePoints=4;
function lifeReduce(value){
    if(value){
        document.querySelectorAll(".healthBox")[0].classList.remove("healthBox");
        lifePoints--;
    }
    aLookAtTheWord();
}

//randomWord
let mainWord=Math.floor(Math.random()*arrayRandomWords.length);
function buildRandomWord(rNum){
    for(let i=0;i<arrayRandomWords[rNum].length;i++){
        document.querySelectorAll(".empty")[i].classList.add("lowDash");
    }
}

buildRandomWord(mainWord);

// keyboard
function wordCalculator(inn){
    damageValue=true;
    for(let i=0;i<arrayRandomWords[mainWord].length;i++){
        if(inn==arrayRandomWords[mainWord][i]){
            document.querySelectorAll(".randomWordLetter")[i].innerHTML=inn;
            damageValue=false;
        }
    }
    lifeReduce(damageValue);
    if(!lifePoints){
        alert("Game Over");
        gameOver();
    }
}
function addListenersOnButtons(){
    for(let i=0;i<document.querySelectorAll(".inputKeys").length;i++){
        document.querySelectorAll(".inputKeys")[i].addEventListener("click",function(){
            console.log(this.innerHTML);
            sounds(true);
            wordCalculator(this.innerHTML);
            aLookAtTheWord();
            this.innerHTML="";
        });
    }
}
addListenersOnButtons();

// game over

function gameOver(){
    setTimeout(location.reload(),500);
}
function aLookAtTheWord(){
    let winCondition=0;
    for(let i=0;i<arrayRandomWords[mainWord].length;i++){

        if(document.querySelectorAll(".randomWordLetter")[i].innerHTML==arrayRandomWords[mainWord][i]){
            winCondition++;
            answerWord[i]=document.querySelectorAll(".randomWordLetter")[i].innerHTML;
        }
        
    }
    if(winCondition==arrayRandomWords[mainWord].length){
        sounds(false);
        alert("you win");
        gameOver();
    }
}