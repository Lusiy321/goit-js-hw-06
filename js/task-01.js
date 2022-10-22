const categoriEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriEl.length);

categoriEl.forEach(function (numbers, index) {
  console.log(`Category: ${numbers.firstElementChild.textContent}`);
  console.log(`Elements: ${numbers.lastElementChild.children.length}`);
});
