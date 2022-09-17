const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients');
const ingredientsAllLi = [];

ingredients.forEach((ingredient)=>{
const ingredientsLi=document.createElement('li');
ingredientsLi.textContent=ingredient;
ingredientsLi.setAttribute('class', 'item');
ingredientsAllLi.push(ingredientsLi)
});

ingredientsUl.append(...ingredientsAllLi);