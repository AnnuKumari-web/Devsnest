const first_input = document.getElementById('first-input');
const second_input = document.getElementById('second-input');
const button_clicked = document.getElementById('buttons')
const result = document.getElementById('result');

button_clicked.addEventListener('click', calculate);

function calculate(e) {
  const first = Number(first_input.value)
  const second = Number(second_input.value)
  const operation = e.target.innerText;
  switch (operation) {
    case "Add":
      calAns(first + second);
      break;
    case "Subtract":
      calAns(first - second);
      break;
    case "Multiply":
      calAns(first * second);
      break;
    case "Divide":
      calAns(first / second);
      break;
    default:
      alert("Incorrect Input");
      break;
  }
}

function calAns(ans){
  result.innerText=`Result of the given calculation is ${ans}`;
}
