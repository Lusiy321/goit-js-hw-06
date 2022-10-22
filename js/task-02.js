const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent += ingredients[i];
  ulEl.appendChild(listEl);
}
