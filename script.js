function comparePassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    if (password === confirmPassword) {
        document.getElementById('registration_form').submit();
    } else {
        alert('Password Does Not Match, Try Again!!');
    }
}
