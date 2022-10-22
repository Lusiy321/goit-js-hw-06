function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("[data-page]");
const spanEl = document.querySelector(".color");
btn.addEventListener("click", changeColor);

function changeColor(evt) {
  evt.preventDefault();
  spanEl.textContent = ` - ${getRandomHexColor()}`;
  body.style.backgroundColor = `${getRandomHexColor()}`;
}
