document.addEventListener("DOMContentLoaded", function () {
    var passwordField = document.getElementById('password');
    var togglePasswordIcon = document.getElementById('togglePassword');
    var submitButton = document.querySelector('input[type="submit"]');

   // if (passwordField.value == '') {
   //     submitButton.disabled = true;
   // }

    passwordField.addEventListener('input', function () {
        if (passwordField.value.length > 19 || passwordField.value == '') {
            passwordField.value = passwordField.value.slice(0, 19);
            passwordField.classList.add('error');
            submitButton.disabled = true;
        } else {
            passwordField.classList.remove('error');
            submitButton.disabled = false;
        }
    });

    togglePasswordIcon.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePasswordIcon.src = './assets/img/icons/eye_slash_fill.png'; // Cambiar la imagen a ojo tachado
        } else {
            passwordField.type = 'password';
            togglePasswordIcon.src = './assets/img/icons/eye_fill.png'; // Cambiar la imagen a ojo abierto
        }
    });
});