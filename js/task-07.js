const inputFontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
inputFontSize.addEventListener("input", (event) => {
  const value = event.target.value;
  spanText.style.fontSize = `${value}px`;
});
