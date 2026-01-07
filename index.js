function disclaimer() {
  const photo = document.querySelector(".myself");
  const agree = confirm("Agree to the Creative Commons License?");
  if (agree) {
    photo.style.display = "block";
  } else {
    window.location.href = "https://creativecommons.org/licenses/";
  }
}

window.onload = disclaimer;
