'use strict'

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
//  оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const refs = {
    input: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}

refs.input.addEventListener('input', onSizeChange);


function onSizeChange(){
    const size = refs.input.value;
    refs.textEl.style.fontSize = size + 'px';

}



