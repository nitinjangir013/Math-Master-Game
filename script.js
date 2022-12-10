var is_space=false;
var selectDiv = document.getElementById('result');
const result = document.getElementsByClassName('input_container')[0];
const celebration = document.getElementsByClassName('celebration')[0];
retry();
function retry() {
	document.getElementById('total').innerHTML= '?';
	selectDiv.style.transform = 'scale(1.0)';
	selectDiv.innerHTML ='';
	result.style.display = 'block';
	selectDiv.style.display = 'none';
	celebration.style.display = 'none';
var firstNumber = parseInt(Math.random()*30);
var secondNumber = parseInt(Math.random()*30);
var primary = document.getElementById('primary-number');
    primary.innerHTML = firstNumber;
var secondary = document.getElementById('secondary-number');
    secondary.innerHTML = secondNumber;
	const selectedOperator = document.getElementById('oprator');
	const operator = parseInt(Math.random()*30);
	if (operator>20) {
		selectedOperator.innerHTML = '+';
		total = firstNumber + secondNumber;
	}
	else if (operator < 20 && operator >10) {
		selectedOperator.innerHTML = '-';
		total = firstNumber - secondNumber;
	}
	else {
		selectedOperator.innerHTML = '*';
		total = firstNumber * secondNumber;
	}}
function guess() {
	console.log("Clicked on the check button");
	const guess_input = document.getElementById('guess');
	const guess = guess_input.value;
	if (guess=="") {
		is_space=true;
	}
	else
	{
		is_space=false;
	}
	if (is_space==false) {
	result.style.display = 'none';
	selectDiv.style.display = 'block';
	if (guess == total){
	selectDiv.style.transform = 'scale(1)';
	celebration.style.display = 'block';
	setTimeout(function(){
	    selectDiv.innerHTML ='Correct Answer!';
	    selectDiv.style.transition = 'all 1s ease-out';
	    selectDiv.style.transform = 'scale(1.1)';
	    selectDiv.style.color ='#6dfc74';
    },0.1);
	} else {
	selectDiv.style.transform = 'scale(1)';
	setTimeout(function(){
		selectDiv.innerHTML ='Wrong Answer!';
	    selectDiv.style.transition = 'all 1s ease-out';
	    selectDiv.style.transform = 'scale(1.1)';
	    selectDiv.style.color ='#a10000';
	},0.1);
	}
	guess_input.value="";
	document.getElementById('total').innerHTML= total;
	}
}