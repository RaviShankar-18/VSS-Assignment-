const resetPasswordForm = document.getElementById("resetPasswordForm");
const errorMessages = document.getElementById("errorMessages");

resetPasswordForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Password validation regex pattern
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  

  if (newPassword !== confirmPassword) {
    errorMessages.innerText = "Passwords do not match";
    errorMessages.style.color = "red";
    return;
  }

  if (!newPassword.match(passwordPattern)) {
    errorMessages.innerText = "Password must have at least one lowercase, one uppercase, one special character, one numeric, and be at least 8 characters long";
    errorMessages.style.color = "red";
    return;
  }
  else if(newPassword == confirmPassword){
    successMessages.innerText = " one lowercase character one uppercase character one special character one number 8 character minimum";
    successMessages.style.color = "green";
    return;
  }

 
});



