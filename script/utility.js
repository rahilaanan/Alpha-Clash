function hideElementById (elementId){
const hide = document.getElementById(elementId);
hide.classList.add('hidden');

}

function showElementById (elementId){
    const show = document.getElementById(elementId);
    show.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
const element = document.getElementById(elementId.toLowerCase());
console.log(elementId)
element.classList.add('bg-orange-400');

}
function removeBackgroundById(elementId){
const element = document.getElementById(elementId.toLowerCase());
element.classList.remove('bg-orange-400');
}

function getElementTextById(elementId){
const element = document.getElementById(elementId);
const text=element.innerText;
return text;
}

function getLifeScoreValueById (elementId){
const element = document.getElementById(elementId);
const getLifeScoreValueText = element.innerText;
const value = parseInt(getLifeScoreValueText);
return value;
}

function setLifeScoreValueById(elementId, value){
    const element =document.getElementById(elementId);
    element.innerText = value;
    //set don't need return.
}


function getRandomAlphabet(){
const alphaString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabets = alphaString.split('');


//get a random alpha from 0-25
 const randomNumber = Math.random()*25;
 const index = Math.round(randomNumber);

 const alphabet = alphabets[index];
 console.log( alphabet);
 return alphabet;

}

