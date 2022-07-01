const loginForm = document.querySelector(".login-form");

const chekLoginForm = (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
  }

  return loginForm.reset();
};

loginForm.addEventListener("submit", chekLoginForm);
