const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quesAns = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('choice');
const scoreCard = document.getElementById('score')

let score = 0

const choice = document.querySelectorAll('.option');

const quesSet = [
  {
    question: 'India\'s largest city by population',
    answers: [
      { text: 'Delhi', correct: false },
      { text: "Mumbai", correct: true },
      { text: "Pune", correct: false },
      { text: "Bangalore", correct: false }
    ]
  },
  {
    question: 'India is a federal union comprising twenty-nine states and how many union territories?',
    answers: [
      { text: '6', correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
      { text: "9", correct: false }
    ]
  },
  {
    question: 'When is the Indian Air Force Day celebrated?',
    answers: [
      { text: "October 9", correct: false },
      { text: "October 10", correct: false },
      { text: "October 8", correct: true },
      { text: "October 11", correct: false }
    ]
  },
  {
    question: 'In which state is the main language Khasi?',
    answers: [
      { text: "Nagaland", correct: false },
      { text: "Rajasthan", correct: false },
      { text: "Maharashtra", correct: false },
      { text: "Meghalaya", correct: true }
    ]
  },
  {
    question: 'Which of the following created history in 2016 by winning all three gold medals on offer in the 1st Western Asia Youth Chess Championship?',
    answers: [
      { text: "Kush Bhagat", correct: true },
      { text: "Vidit Gujrathi", correct: false },
      { text: "Nihal Sarin", correct: false },
      { text: "Praggnanandhaa", correct: false }
    ]
  }
]


startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click',(e)=>{
  currentQuesIndex++;
  setNextQues();
})

let shuffleQues, currentQuesIndex;

function startQuiz() {
  quesAns.classList.remove('hide');
  startButton.classList.add('hide');
  shuffleQues = quesSet.sort(() => Math.round() - .5);
  currentQuesIndex = 0;
  setNextQues();
}

function setNextQues() {
  reset();
  showQues(shuffleQues[currentQuesIndex])
}

function showQues(question){
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('option')
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAns)
    answerElement.appendChild(button)
  })
}

function reset(){
  nextButton.classList.add('hide');
  // make a score-card 
  // score+=1
  // scoreCard.innerText = `${score}`
  while(answerElement.firstChild){
    answerElement.removeChild(answerElement.firstChild)
  }
}

function selectAns(e) {
  clearStatusClass(document.body)
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerElement.children).forEach(button =>{
    setStatusClass(button,button.dataset.correct)
  })

  if(shuffleQues.length > currentQuesIndex+1){
    nextButton.classList.remove('hide')
  } 
  else{
    startButton.classList.remove('hide')
    startButton.innerText = "Restart"
  }

}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  }
  else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


