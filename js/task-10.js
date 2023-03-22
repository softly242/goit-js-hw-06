function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("[type='number']");

const createBoxes = (amount) => {
  const arr = Array(amount).fill("");
  let size = 30;
  const divs = arr.map((_) => {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    div.style.backgroundColor = getRandomHexColor();
    return div;
  });
  boxes.append(...divs);
};

buttonCreate.addEventListener("click", (_) => {
  if (input.value === "") return;
  createBoxes(Number(input.value));
});

const destroyBoxes = () => {
  input.value = "";
  boxes.replaceChildren();
};

buttonDestroy.addEventListener("click", destroyBoxes);
