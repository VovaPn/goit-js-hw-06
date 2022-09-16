function getRandomHexColor() {
 return (`#${Math.floor(Math.random() * 16777215).toString(16)}`);
};

const changeColorButton = document.querySelector('.change-color');
const backgroundColorValue = document.querySelector('.color');
const body = document.querySelector('body');

changeColorButton.addEventListener("click", () => {
  let color = getRandomHexColor();
  backgroundColorValue.textContent = color;
 body.setAttribute('style',`background-color:${color}`)
});