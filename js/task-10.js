function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", onCreateBoxes);
refs.btnDestroy.addEventListener("click", onDestroyBoxes);

function onCreateBoxes() {
  const amount = refs.input.value;
  const fragment = new DocumentFragment();
  const arrayDiv = [];

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    const sizes = 30 + i * 10 + "px";

    newDiv.style.width = sizes;
    newDiv.style.height = sizes;
    newDiv.style.backgroundColor = getRandomHexColor();
    arrayDiv.push(newDiv);
    fragment.appendChild(newDiv);
  }
  refs.boxes.appendChild(fragment);
}
function onDestroyBoxes() {
  refs.input.value = "";
  boxes.innerHTML = "";
}
