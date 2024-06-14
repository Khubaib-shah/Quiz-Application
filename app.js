var FormContainer = document.getElementById("FormContainer");
var StartContainer = document.getElementById("StartContainer");

function SubmitButtonHandler() {
  var Name = document.getElementById("Name");
  var Email = document.getElementById("Email");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var formHeading = document.getElementById("formHeading");

  if (!Name.value) {
    nameError.className = "show";
    nameError.style.color = "red";
    console.log(Name);
    return;
}
if (!Email.value) {
      emailError.className = "show";
    emailError.style.color = "red";
    return;
  }
  localStorage.setItem("name", Name.value);
  localStorage.setItem("email", Email.value);
  FormContainer.className = "hide";
  StartContainer.className = "show";
  formHeading.innerText = "wow bery denguras";
  emailError.className = "hide";
  nameError.className = "hide";
  console.log("form sudmitted")
}
