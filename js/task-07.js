const slider = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
slider.addEventListener("change", setFontSize);

function setFontSize(evt) {
  evt.preventDefault();
  spanEl.style.fontSize = `${slider.value}px`;
}
