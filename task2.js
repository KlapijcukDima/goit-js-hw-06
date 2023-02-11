'use strict'

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];




const listEl = document.querySelector('#ingredients');

const itemEl = ingredients.reduce((acc, item) => acc + `<li class="item">${item}</li>`, '');

listEl.innerHTML = itemEl;

console.log(listEl)