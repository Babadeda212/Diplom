const buttonOpne = document.querySelector(".main__game_button");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__buttonClose");
const popupQuest = document.querySelector(".popup__question");
const popupButton = document.querySelector(".popup__button");
const popupInput = document.querySelector(".popup__answer");
const popupTitle = document.querySelector(".popup__title");

const questArr = [
                    [
                        'У одного мужчины четыре сына, и у каждого из них есть родная сестра. Сколько у него детей?',
                        'Полтора судака стоят полтора рубля. Сколько стоят три судака?',
                        'Когда гусь стоит на одной ноге,он весит 7 кг. Сколько будет весить гусь,если встанет на две ноги?',
                        'Бабушке Ани 70 лет, мама в 2 раза моложе бабушки, а Аня на 26 лет моложе мамы. Сколько лет Ане?',
                        'Карандаш разделили на три части. Сколько сделали разрезов?',
                        'Одно яйцо нужно варить 5 минут. Сколько времени потребуется,чтобы сварить 6 яиц?',
                        'В автобусе едет 15 детей. Это составляет одну треть всех пассажиров. Сколько всего пассажиров едут в автобусе?',
                        'Сын с отцом, да сын с отцом,да дедушка с внуком.Много ли их?',
                        '5 рыбаков съели 5 карпов за 5 дней. Как вы думаете,а за сколько дней 15 рыбаков съедят 15 карпов?',
                        'На столе лежит яблоко. Его разделили на 4 части.Сколько яблок лежит на столе?'
                    ],
                    [
                        '5',
                        '3',
                        '7',
                        '9',
                        '2',
                        '5',
                        '45',
                        '3',
                        '5',
                        '1'
                    ]
                ];

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
        popupButton.classList.add('popup__answer_hidden');
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
    popupButton.classList.remove('popup__answer_hidden');
    openPopup();
})
buttonClose.addEventListener('click',()=>{
    closePopup();
})
popupButton.addEventListener('click',()=>{
    nextQuest();
})