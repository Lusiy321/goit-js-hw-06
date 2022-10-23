const form = document.querySelector(".login-form");

form.addEventListener("submit", getForm);

function getForm(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please write all the fields!");
  }
  const user = {
    email: `${email.value}`,
    password: `${password.value}`,
  };
  alert(`Email: ${user.email} Password: ${user.password}`);
  evt.currentTarget.reset();
  console.log(user);
}
