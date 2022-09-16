const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl=document.querySelector('#ingredients');
ingredients.forEach((ingredient)=>{
const ingredientsLi=document.createElement('li');
ingredientsLi.textContent=ingredient;
ingredientsLi.setAttribute('class','item')
ingredientsUl.append(ingredientsLi)
});
