const input = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
input.addEventListener("input", setFontSize);

function setFontSize(evt) {
  evt.preventDefault();
  spanEl.style.fontSize = `${input.value}px`;
}
