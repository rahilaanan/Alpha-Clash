function hideElementById (elementId){
const hide = document.getElementById(elementId);
hide.classList.add('hidden');

}

function showElementById (elementId){
    const show = document.getElementById(elementId);
    show.classList.remove('hidden');
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

