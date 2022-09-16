function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = getRandomHexColor();
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

const createBoxes = amount => {
  const boxesToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div')
    div.style.height = `${30 + 10 * i}px`
    div.style.width = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor()
    boxesToAdd.push(div)
  }
  return boxesToAdd
};

createButton.addEventListener('click', () => {
  let boxesToAdd = createBoxes(input.value)
  boxes.append(...boxesToAdd)
});

const destroyBoxes = () => {
  boxes.innerHTML = ''
};
destroyButton.addEventListener('click', () => {
	destroyBoxes()
})