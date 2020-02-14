function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let errorDiv = document.getElementById("errorDiv");
let errorIcon = document.getElementById("errorIcon");

document.getElementById("email-form").addEventListener("submit", e => {
  e.preventDefault();
  if (!validateEmail(e.target.elements[0].value)) {
    console.log("---> show error");
    errorDiv.innerHTML = "Please provide a valid email address";
    errorIcon.style.opacity = 1;
  } else {
    console.log("---> hide error");
    errorDiv.innerHTML = "&nbsp;";
    errorIcon.style.opacity = 0;
  }
});
