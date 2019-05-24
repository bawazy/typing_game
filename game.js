window.addEventListener('load', init);
 
let time =5;
let score =0;
let isPlaying;


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds =  document.querySelector('#seconds');

const words = [
	'hat',
	'girl',
	'boy',
	'displacement',
	'parcel',
	'damn',
	'because',
	'scalpel',
	'horrendous',
	'digital',
	'display',
	'waiting',
	'hysteria',
	'prestidigitation',
	'wheat',
	'amazing',
	'anthem',
	'islam',
	'psycology',
	'physiotherapy',
	'mathematics',
	'sociology',
	'infinity',
	'index',
	'function',
	'language',
	'entity',
	'advertisement',
	'congratulation',
	'ceremony',
	'current',
	'saving'

];

function init(){
	//load word from array
	showWord(words);
	//start matching on word input
	wordInput.addEventListener('input', startMatch);
	//call countdown every second
	setInterval(countdown, 1000);
	// check game status
	setInterval(checkStatus, 50);

}

//start match
function startMatch(){
	if (matchWords()) {
		isPlaying = true;
		time = 6;
		showWord(words);
		wordInput.value='';
		score++;
	}

 //if score is negative 1 display 0
	if (score=== -1) {
	scoreDisplay.innerHTML=0;
 }else{
	scoreDisplay.innerHTML=score;
}
}

// match currentWord to wordInput
function matchWords() {	
	if (wordInput.value === currentWord.innerHTML) {
			message.innerHTML ='Correct';
			return true;
		
		}else{
			message.innerHTML = '';
			return false;
		}
}


//piick and show random words
function showWord(words){
	//generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	//output a random word
	currentWord.innerHTML= words[randIndex];
}


function countdown(){
	// make sure time is not run out
	if (time > 0) {
		time--;

	}else if (time===0) {
		//game is over
		isPlaying = false;
	}
	//show time
	timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
	if (!isPlaying && time===0) {

		message.innerHTML = 'Game Over!!!';
		score = -1;
	}
} 