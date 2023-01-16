const randomButton = document.querySelector('.random-button');
const action = document.querySelector('.action');

let actionArray = [
  'Сходить на каток',
  'Погулять',
  'Сходить в ресторан',
  'Сходить в кино',
  'Поиграть в настольные игры',
  'Поиграть в видеоигры',
  'Вместе потренироваться', 
  'Сходить в красивое место и пофотографироваться', 
  'Почитать книгу', 
  'Притвориться англичанами', 
  'Заняться рукоделием', 
  'Сходить в театр', 
  'Вместе приготовить блюдо'
];

let previousNumber = 0;

function getRandom (array) {
  const difference = array.length;
  let rand = Math.floor(Math.random() * difference);
  
  while (previousNumber === rand) {
    rand = Math.floor(Math.random() * difference);
  }  

  let act = array[rand];
  pasteText(action, act);

  previousNumber = rand;
}

function pasteText (paragraph, text) {
  paragraph.textContent = text;
}

randomButton.addEventListener('click', function () {
  getRandom(actionArray);
});