const refs = {
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
  btn: document.querySelector('[type="submit"]'),
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onCollectData);

function onCollectData(event) {
  event.preventDefault();
  refs.email.addEventListener("input", onCorrectInput);
  refs.password.addEventListener("input", onCorrectInput);

  function onCorrectInput(event) {
    if (event.currentTarget.value === "") {
      alert("Поле должно быть заполнено.");
    }
    return;
  }

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);
  refs.form.reset();
}
