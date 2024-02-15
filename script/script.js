/* function play (){
//hide home screen
const homeSection = document.getElementById('home');
homeSection.classList.add('hidden');


//show playground
const playSection = document.getElementById('play-section');
playSection.classList.remove('hidden');
} */
function handleKeyBoardButtonPress(event){
    const userPressed = event.key;
    console.log('pressed',userPressed);

    //get the expected press

    const currentAlphabetPress = document.getElementById('randomAlpha');
    const currentAlphabet = currentAlphabetPress.innerText.toLowerCase();
    //console.log(userPressed,currentAlphabet);

    //check matched or not

    if(userPressed === currentAlphabet){
console.log("you did great!");

//quit the game
if(userPressed==='Escape'){
    gameOver();
}
//update score
//1.get the current score..
/* const currentScoreElement = document.getElementById('current-score');
const currentScoreText = currentScoreElement.innerText;
const currentScore = parseInt(currentScoreText);
//console.log(currentScoreText);


//2. increase the score by 1
const newScore = currentScore + 1;
currentScoreElement.innerText = newScore;
 */

//with utility function
const currentScore =getLifeScoreValueById('current-score');
const newScore = currentScore + 1;
setLifeScoreValueById('current-score',newScore);

//start a new round
removeBackgroundById(currentAlphabet);
continueGame();
    }else{
//get the current life
       /*  const currentLifeElement =document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        //decrease life
        const newLife = currentLife -1;
        currentLifeElement.innerText = newLife;
 */

//with utility function
        const currentLife=getLifeScoreValueById('current-life');
        const newLife = currentLife - 1;
        setLifeScoreValueById('current-life',newLife);

        console.log("you've lost a life");

        if (newLife===0){
            gameOver();
        }
    }

}
document.addEventListener('keyup',handleKeyBoardButtonPress);


function continueGame(){
    const alphabet = getRandomAlphabet();

    const currentAlphabet = document.getElementById('randomAlpha');
currentAlphabet.innerText = alphabet;

setBackgroundColorById(alphabet);
}

function play(){
    //hide everything, show only play ground

  hideElementById('home');
  hideElementById('score');
  showElementById('play-section');

  //reset score and life update
  setLifeScoreValueById('current-life',5);
  setLifeScoreValueById('current-score',0);

continueGame()
}

function gameOver (){
hideElementById('play-section');
showElementById('score');

//update final score
const lastScore = getLifeScoreValueById('current-score');
setLifeScoreValueById('score-update', lastScore);


//clear the last pressed/selected key highlight

const currentAlphabet = getElementTextById('randomAlpha');
removeBackgroundById(currentAlphabet);

}