'use strict'

let valueEl = Number(document.querySelector('#value').textContent);
let counterEl = document.querySelector('#value')

const decrementEl = document.querySelector('#counter').firstElementChild;
const incrementEl = document.querySelector('#counter').lastElementChild;

decrementEl.addEventListener('click', event => {
    valueEl -= 1;
    counterEl.innerText = valueEl;
});

incrementEl.addEventListener('click', event => {
    valueEl += 1;
    counterEl.innerText = valueEl;
  });