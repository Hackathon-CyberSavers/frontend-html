
function copyEmail(button) {
  const email = button.previousElementSibling.textContent;
  navigator.clipboard.writeText(email).then(() => {
    button.textContent = "E-mail copiado!";
    setTimeout(() => button.textContent = "Copiar E-mail", 2000);
  });
}
