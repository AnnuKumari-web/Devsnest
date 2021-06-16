const box = document.querySelectorAll('.grid-item');
const count = document.getElementById('result');
const arr =[130,131,149,150,151,152,168,169,170,171,172,173,187,188,190,191,193,194,207,208,209,210,211,212,213,214,229,232,248,250,251,253,267,269,272,274]

var score = 0 ;

// var timeleft = 60;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   } else {
//     document.getElementById("countdown").innerHTML = timeleft + " s";
//   }
//   timeleft -= 1;
// }, 1000);

for (var i = 0; i < box.length; i++) {
  for (var j in arr){
    if(i==arr[j]){
      box[i-1].classList.add('white')
    }
    }
  box[i].addEventListener('click', (e) => {
    if (e.target.classList.contains('white')) {
      e.target.classList.remove('white');
      score-=1;
      display(score);
    }
    else {
      e.target.classList.add('white');
      score+=1;
      display(score);
    }
  })
}

function display(score){
  count.innerText = ` Score = ${score} `
}