// Show hints based on password input information

// Hide hints
$("form p span").hide();

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function isUsernamePresent() {
  return $username.val().length > 0;
}


function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent() {
  if(isPasswordValid()) {
    // If valid, hide hint
    $password.next().hide();
  } else {
    // else show hint  
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  // Find out if password and confirmation match
  if(arePasswordsMatching()) {
    // Hide hint if matched
    $confirmPassword.next().hide();
  } else {
    // Else, show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

// See if password is valid
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
  
// When events happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();