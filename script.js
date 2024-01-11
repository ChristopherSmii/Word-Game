let arrayTitle="Word Game";
let titleValue=true;
let arrayRandomWords=[
'Jacket',
'Glitter',
'Harmony',
'Freedom',
'Lantern',
'Velvet',
'Breeze',
'Crimson',
'Twilight',
'Horizon',
'Whisper',
'Orbital',
'Puzzled',
'Scribble',
'Juniper',
'Stellar',
'Echoes',
'Sizzle',
'Flaming',
'Tranquil',
'Fractal',
'Blizzard',
'Uplifts',
'Quantum',
'Trickle',
'Dazzled',
'Venture',
'Harmony',
'Mirage',
'Tangerine',
'Serenade',
'Cerulean',
'Marzipan',
'Pinnacle',
'Blossom',
'Saffron',
'Verdant',
'Mysterious',
'Obsidian',
'Whispers',
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
let lifePoints=3;
function lifeReduce(value){
    if(value){
        document.querySelectorAll(".healthBox")[0].classList.remove("healthBox");
        lifePoints--;
    }
}

//randomWord
let mainWord=Math.floor(Math.random()*arrayRandomWords.length);
function buildRandomWord(rNum){
    for(let i=0;i<arrayRandomWords[rNum].length;i++){
        document.querySelectorAll(".empty")[i].classList.add("lowDash");
    }
}

buildRandomWord(mainWord);

