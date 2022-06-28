const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredient = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredients[i];

  ingredient.push(item);
}
console.log(ingredient);

const list = document.querySelector("#ingredients");
list.append(...ingredient);
