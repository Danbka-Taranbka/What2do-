const randomButton = document.querySelector('.random-button');
const action = document.querySelector('.action');

let actionArray = [
  'Сходить на каток',
  'Погулять',
  'Сходить в ресторан',
  'Сходить в кино'
];

function getRandom (array) {
  
  let difference = array.length - 0;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  let act = array[rand];
  pasteText(action, act);
}

function pasteText (paragraph, text) {
  paragraph.textContent = text;
}

randomButton.addEventListener('click', function () {
  getRandom(actionArray);
});