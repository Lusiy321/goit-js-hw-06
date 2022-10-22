(() => {
  let counterValue = 0;
  const refs = {
    minBtn: document.querySelector('[data-action = "decrement"]'),
    plusBtn: document.querySelector('[data-action = "increment"]'),
    spanValue: document.querySelector("#value"),
  };

  refs.minBtn.addEventListener("click", changeValueMin);
  refs.plusBtn.addEventListener("click", changeValuePlus);

  function changeValueMin() {
    refs.spanValue.textContent = counterValue -= 1;
  }
  function changeValuePlus() {
    refs.spanValue.textContent = counterValue += 1;
  }
})();
