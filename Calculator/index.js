console.log("hello");

let screen = document.getElementById('screen');
const buttons = document.querySelectorAll("button");
let screenValue = '';

console.log(buttons)
for(item of buttons) {	
	item.addEventListener('click', (e) => {
		buttonText = e.target.innerText;
		console.log('Button is ', buttonText);
      
		if (buttonText=='C'){
			screenValue='';
			screen.value=screenValue;
		}
		else if (buttonText=='='){
			screen.value=eval(screenValue);
		}
		else{
			screenValue+=buttonText;
			screen.value=screenValue;
		}

	})
}
