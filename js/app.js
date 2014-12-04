// Show hints based on password input information

// Hide hints
$("form p span").hide();

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

function passwordEvent() {
  if($password.val().length > 8) {
    // If valid, hide hint
    $password.next().hide();
  } else {
    // else show hint  
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  // Find out if password and confirmation match
  if($password.val() === $confirmPassword.val()) {
    // Hide hint if matched
    $confirmPassword.next().hide();
  } else {
    // Else, show hint
    $confirmPassword.next().show();
  }
}

// See if password is valid
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
  
  
// When events happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
  