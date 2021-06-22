const box = document.querySelectorAll('.box');
const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');

var booked = 0;
var remaining = 36;

for (var i =0;i<box.length;i++){
  box[i].addEventListener('click',(e)=>{
    if(e.target.classList.contains('booked')){
      e.target.classList.remove('booked');
      remaining+=1;
      booked-=1;
      remain(remaining)
      book(booked)
    }
    else{
      e.target.classList.add('booked');
      remaining-=1;
      booked+=1;
      remain(remaining)
      book(booked)
    }
})
}

function book(booked){
  val1.innerHTML = `${booked}`
}

function remain(remaining){
  val2.innerHTML = `${remaining}`
}