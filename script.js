let arrayTitle="Word Game";
let titleValue=true;
function sounds(){
    let audio=new Audio('./click-button-140881.mp3');
    audio.play();
}
function titleWrite(){
    for(let i=0;i<document.querySelectorAll(".titleLetter").length;i++){
        let time=setTimeout(function(){
            document.querySelectorAll(".titleLetter")[i].innerHTML=arrayTitle[i];
        },(600*i+(600)));
    }
}
function TitleLoader(){

    titleWrite();

}
TitleLoader();

