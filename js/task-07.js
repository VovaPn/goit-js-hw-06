const inputSlider = document.querySelector('#font-size-control');
const changedText = document.querySelector('#text');
changedText.setAttribute('style',`font-size:${inputSlider.value}px`);
inputSlider.addEventListener("input", function() {
   changedText.setAttribute('style',`font-size:${inputSlider.value}px`);
}); 