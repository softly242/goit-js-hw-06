const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (!email || !password) {
    alert("Все поля должны быть заполнены");
  } else {
    const message = { email, password };
    console.log(message);
    event.target.reset()
  }
});
