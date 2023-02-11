'use strict'

// let refs = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// }

// refs.input = addEventListener('input', onInputChange);

// function onInputChange(event) {
//     refs.output = event.currentTarget.value;
//     refs.input !== ' ' ? (refs.output.innerText = refs.input.trim()) : 'незнакомец';
   
// }

// let input = document.querySelector('#name-input');

// let output = document.querySelector('#name-output');


// input.addEventListener('input', onInputChange);


// function onInputChange(event) {
//   input = event.currentTarget.value;
//   console.log(input);

//     if (input.value === '') {
//     output.innerHTML = input.value;
//     }
//     }else if(input === 'Paul'){
//     console.log("Дідам доступу немає")
//   }else if (input === 'Dima'){
//     console.log("Найщиріші вітання пане");
  
// }


// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
    
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
//}


const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
		outputEl.textContent = 'Anonymous'
	}

}

