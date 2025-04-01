const Randomnum = (parseInt(Math.random() * 100 + 1));

const sumbit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gussslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousguss = [];
let numguess = 1;

let playgame = true;

if (playgame) {
    sumbit.addEventListener('click', function (gmevn) {
        gmevn.preventDefault();
        const guess = parseInt(userInput.value);
        validateguss(guess);

    });
}

function validateguss(guess) {
    if (isNaN(guess)) {
        alert('pleae enter  avalid number');
    } else if (guess < 1) {
        alert('pleae enter a number more than 1');
    }
    else if (guess > 100) {
        alert('pleae enter a number less than 100');
    } else {
        previousguss.push(guess);
        if (numguess === 11) {
            displayguess(guess);
            displaymessage(`Game over.Random Number was ${Randomnum}`)
            endgame();
        }else{
            displayguess(guess);
            checkguess(guess);
        }
        
    }
}
function checkguess(guess) {
    if (guess === Randomnum) {
        displaymessage(`you guessted it right`)
        endgame()   ;
    } else if (guess < Randomnum){
        displaymessage(`number is tooo low`);

    }else if (guess > Randomnum){
        displaymessage(`number is tooo high`);

    }

}

function displayguess(guess) {
    userInput.value = '';
    gussslot.innerHTML +=`${guess},  `;
    numguess++;
    remaining.innerHTML = `$(11 - numguess)`    ;



}
function displaymessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}
function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">start new game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();

}
function newgame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      Randomnum= parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numguess = 1;
      gussslot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startover.removeChild(p);
  
      playgame = true;
    });
}






