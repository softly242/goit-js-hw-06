const input = document.querySelector("#validation-input");
const validLength = input.getAttribute("data-length");
input.addEventListener("blur", (event) => {
  const value = event.target.value;
  if (value.length == validLength) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
});
