/* function play (){
//hide home screen
const homeSection = document.getElementById('home');
homeSection.classList.add('hidden');


//show playground
const playSection = document.getElementById('play-section');
playSection.classList.remove('hidden');
} */
function continueGame(){
    getRandomAlphabet();
}

function play(){
  hideElementById('home');
  showElementById('play-section');
continueGame()
}

