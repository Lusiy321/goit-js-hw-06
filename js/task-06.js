const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", formCheck);

console.log(inputEl);
function formCheck(evt) {
  evt.preventDefault();
  if (inputEl.value.length === 6) {
    inputEl.style.borderColor = "#4caf50";
  } else if (inputEl.value.length === 0) {
    inputEl.style.borderColor = "#bdbdbd";
  } else {
    inputEl.style.borderColor = "#f44336";
  }
  return;
}
