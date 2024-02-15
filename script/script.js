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
//update score
//1.get the current score..
const currentScoreElement = document.getElementById('current-score');
const currentScoreText = currentScoreElement.innerText;
const currentScore = parseInt(currentScoreText);
//console.log(currentScoreText);


//2. increase the score by 1
const newScore = currentScore + 1;
currentScoreElement.innerText = newScore;


//start a new round
removeBackgroundById(currentAlphabet);
continueGame();
    }else{
//get the current life
        const currentLifeElement =document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        //decrease life
        const newLife = currentLife -1;
        currentLifeElement.innerText = newLife;

        console.log("you've lost a life");
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
  hideElementById('home');
  showElementById('play-section');
continueGame()
}

