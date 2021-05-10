const buttonOpne = document.querySelector(".main__game_button");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__buttonClose");
const popupQuest = document.querySelector(".popup__question");
const popupButton = document.querySelector(".popup__button");
const popupInput = document.querySelector(".popup__answer");
const popupTitle = document.querySelector(".popup__title");

const questArr = [['1+1=','2*3=','3-1=','22+4=','3+1=','2+2=','21-2=','2+10=','23+10=','9/3='],['2','6','2','26','4','4','19','12','13','6']];

let qAnda = 0;
let point = 0;
let raund = 1;

for(let i=0;i<10;i++){
    console.log(questArr[0][i],'=',questArr[1][i]);
}
function newGame(){
    qAnda=0;
    point=0;
    raund=1;
    popupInput.classList.remove('popup__answer_hidden');
    popupButton.disabled = false;
    popupTitle.innerHTML = raund+'/10';
    addQuest(questArr[0][qAnda]);
}
function addQuest(que){
    popupQuest.innerHTML = que;
}
function nextQuest(){
    raund=raund+1;
    valid(questArr[1][qAnda]);
    qAnda =qAnda+1;
    addQuest(questArr[0][qAnda]);
    popupInput.value='';
    validRaund();
}
function validRaund(){
    if(raund===11){
        popupInput.classList.add('popup__answer_hidden');
        popupButton.disabled = true;
        popupQuest.innerHTML = "Молодец ты набрал "+point;
    }
    else{
        popupTitle.innerHTML = raund+'/10';
    }
}
function valid(que){
    const answer = popupInput.value;
   if(que === answer){
       point=point+1;
   }
}
function openPopup(){
    popup.classList.add('popup__open');
    newGame();
}
function closePopup(){
    popup.classList.remove('popup__open');
}

buttonOpne.addEventListener('click',()=>{
    openPopup();
})
buttonClose.addEventListener('click',()=>{
    closePopup();
})
popupButton.addEventListener('click',()=>{
    nextQuest();
})