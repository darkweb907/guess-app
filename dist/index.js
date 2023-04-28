/** @format */
"use strict";

// lets create a random number
let question = document.querySelector("#question");
// lets get the button and the input
let submit = document.querySelector("#submit");
let start = document.querySelector("#start");
let reduce = document.querySelector(".reduce");
let high = document.querySelector(".high");
let reset = document.querySelector("#reset");
let put = document.querySelector("#input");
let guess = Math.floor(Math.random() * 20);

let score = 20;
// submit the function
submit.addEventListener("click", () => {
	console.log(guess);
	let input = Number(put.value);
	if (input === guess) {
		document.body.classList = "p-5 mt-5 bg-green-500 text-white ";
		high.textContent = score;
		question.textContent = guess;
		start.textContent = "🎈 wow correct guessing";
	} else if (!input) {
		start.textContent = "💔 Guessing seems empty";
	} else if (input < guess) {
		score === 0 ? (score = 0) : score--;
		reduce.textContent = score;
		start.textContent = "🚫 too low";
	} else if (input > guess) {
		score === 0 ? (score = 0) : score--;
		reduce.textContent = score;
		start.textContent = "🔕 too high";
	}
});

// reset button now

reset.onclick = () => {
	put.value = "";
	score = 20;
	start.textContent = " 🤔 Start Guessing!!";
	guess = Math.floor(Math.random() * 20);
	reduce.textContent = score;
	question.textContent = "?";
	high.textContent = 0;
	document.body.classList = "p-5 mt-5 bg-gray-700 text-white ";
};
