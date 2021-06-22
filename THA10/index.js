const boxes = document.querySelectorAll('.box');
const points = document.getElementById('points');
const moves = document.getElementById('moves')

let hasFlipped = false;
let lockBoard = false;
let first, second;
var point = 0;
var move = 0 ;

function flipCard() {
  if (lockBoard) return;
  if (this === first) return;
  move += 1;
  moves.value = move; 

  this.classList.add('flip');

  if (!hasFlipped) {
    // first card 
    hasFlipped = true;
    first = this;
    return;
  }

  // second card 
  hasFlipped = false;
  second = this;

  checkForMatch();

}
// matching
function checkForMatch() {
  // is match 
  if (first.dataset.framework === second.dataset.framework) {
    point +=1;
    points.value = point;
    disableCards();
  }
  // not a match 
  else {
    unflipCards();
  }
}

function disableCards() {
  first.removeEventListener('click', flipCard);
  second.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');

    resetBoard();
    lockBoard = false;
  }, 1500);
}

function resetBoard() {
  [hasFlipped, lockBoard] = [false, false];
  [first, second] = [null, null];
}

(function shuffle() {
  boxes.forEach(box => {
let randonNo= Math.floor(Math.random() * 16);
box.style.order = randonNo;
  });
})();


boxes.forEach(box => box.addEventListener('click', flipCard));