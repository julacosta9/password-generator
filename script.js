const pwLengthSlider = document.querySelector("#pw-length");
const uppercaseCheckbox = document.querySelector("#inlineCheckbox1");
const lowercaseCheckbox = document.querySelector("#inlineCheckbox2");
const numbersCheckbox = document.querySelector("#inlineCheckbox3");
const symbolsCheckbox = document.querySelector("#inlineCheckbox4");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
const pwField = document.querySelector("#password");

const uppercase = [
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
	"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const lowercase = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
	"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const numbers = [
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const symbols = [
	"!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",
	".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`",
	"{", "|", "}", "~"
]

function generatePassword() {

	let parameterArray = [];
	let password = "";

	if (uppercaseCheckbox.checked === false && lowercaseCheckbox.checked ===
		false && numbersCheckbox.checked === false && symbolsCheckbox
		.checked === false) {
		alert("Please check at least 1 box");
	} else {
		if (uppercaseCheckbox.checked) {
			parameterArray = parameterArray.concat(uppercase);
		}

		if (lowercaseCheckbox.checked) {
			parameterArray = parameterArray.concat(lowercase);
		}

		if (numbersCheckbox.checked) {
			parameterArray = parameterArray.concat(numbers);
		}

		if (symbolsCheckbox.checked) { 
			parameterArray = parameterArray.concat(symbols);
		}

		for (let i = 0; i < pwLengthSlider.value; i++) {
			let randomNumber = Math.floor(Math.random() * parameterArray.length); 
			password += parameterArray[randomNumber];
		}

		pwField.innerText = password;
	}
}

function copyToClipboard() {

	if (document.body.createTextRange) { // ms
		var range = docucment.body.createTextRange();
		range.moveToElementText(pwField);
		range.select();
	} else if (window.getSelection) { // moz, opera, webkit

		var selection = window.getSelection();
		var range = document.createRange();

		range.selectNodeContents(pwField);
		selection.removeAllRanges();
		selection.addRange(range);
		document.execCommand("copy");
	}
}

// Set value and fill color of password length slider
var output = document.getElementById("value");

output.innerHTML = pwLengthSlider.value;

pwLengthSlider.oninput = function() {
	output.innerHTML = this.value;
}

var start_value = pwLengthSlider.value;

var x = (start_value / 128) * 100;
var color = 'linear-gradient(90deg, #FC5C7D 0%, #6A82FB ' + x + '%, #ffffff ' +
	x + '%)';
pwLengthSlider.style.background = color;

// Event Listeners    
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);

// Desktop
pwLengthSlider.addEventListener("mousemove", function() { 
	x = ((pwLengthSlider.value / 128) * 100) - 5; // Subtract 5 to ensure the fill color doesn't visually move to the right of the slider thumb
	color = 'linear-gradient(90deg, #FC5C7D 0%, #6A82FB ' + x +
		'%, #ffffff ' + x + '%)';
	pwLengthSlider.style.background = color;
});

pwLengthSlider.addEventListener("click", function() {
	x = ((pwLengthSlider.value / 128) * 100) - 5;
	color = 'linear-gradient(90deg, #FC5C7D 0%, #6A82FB ' + x +
		'%, #ffffff ' + x + '%)';
    pwLengthSlider.style.background = color;
});

// Mobile
pwLengthSlider.addEventListener("touchmove", function() {
	x = ((pwLengthSlider.value / 128) * 100) - 5;
	color = 'linear-gradient(90deg, #FC5C7D 0%, #6A82FB ' + x +
		'%, #ffffff ' + x + '%)';
    pwLengthSlider.style.background = color;
});

pwLengthSlider.addEventListener("touchend", function() {
	x = ((pwLengthSlider.value / 128) * 100) - 5;
	color = 'linear-gradient(90deg, #FC5C7D 0%, #6A82FB ' + x +
		'%, #ffffff ' + x + '%)';
    pwLengthSlider.style.background = color;
});