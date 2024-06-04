function checkName(event) {
    const input = event.currentTarget;
    
    if (formStatus[input.name] = input.value.length > 0) {
        input.parentNode.classList.remove('errorj');
    } else {
        input.parentNode.classList.add('errorj');
    }
}

function checkSurname(event) {
    const input = event.currentTarget;
    
    if (formStatus[input.surname] = input.value.length > 0) {
        input.parentNode.classList.remove('errorj');
    } else {
        input.parentNode.classList.add('errorj');
    }
}

function jsonCheckUsername(json) {
    if (formStatus.username = !json.exists) {
        document.querySelector('.username').classList.remove('errorj');
    } else {
        document.querySelector('.username span').textContent = "Nome utente già utilizzato";
        document.querySelector('.username').classList.add('errorj');
    }
}

function jsonCheckEmail(json) {
    if (formStatus.email = !json.exists) {
        document.querySelector('.email').classList.remove('errorj');
    } else {
        document.querySelector('.email span').textContent = "Email già utilizzata";
        document.querySelector('.email').classList.add('errorj');
    }
}

function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function checkUsername(event) {
    const input = document.querySelector('.username input');

    if(!/^[a-zA-Z0-9_]{1,15}$/.test(input.value)) {
        input.parentNode.querySelector('span').textContent = "Sono ammesse lettere, numeri e underscore. Max. 15";
        input.parentNode.classList.add('errorj');
        formStatus.username = false;

    } else {
        fetch("verifica_username.php?q="+encodeURIComponent(input.value)).then(fetchResponse).then(jsonCheckUsername);
    }    
}

function checkEmail(event) {
    const emailInput = document.querySelector('.email input');
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(emailInput.value).toLowerCase())) {
        document.querySelector('.email span').textContent = "Email non valida";
        document.querySelector('.email').classList.add('errorj');
        formStatus.email = false;

    } else {
        fetch("verifica_email.php?q="+encodeURIComponent(String(emailInput.value).toLowerCase())).then(fetchResponse).then(jsonCheckEmail);
    }
}
function checkPassword(event) {
    const passwordInput = document.querySelector('.password input');
    const errorMessages = [];

    if (passwordInput.value.length < 8) {
        errorMessages.push("La password deve essere lunga almeno 8 caratteri.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value)) {
        errorMessages.push("La password deve contenere almeno un carattere speciale tra questi !@#$%^&*(),.?.");
    }
    if (!/\d/.test(passwordInput.value)) {
        errorMessages.push("La password deve contenere almeno un numero.");
    }
    if (!/[A-Z]/.test(passwordInput.value)) {
        errorMessages.push("La password deve contenere almeno una lettera Maiuscola.");
    }

    if (errorMessages.length > 0) {
        document.querySelector('.password span').innerHTML = errorMessages.join('<br>');
        document.querySelector('.password').classList.add('errorj');
        formStatus.password = false;
    } else {
        document.querySelector('.password span').textContent = '';
        document.querySelector('.password').classList.remove('errorj');
        formStatus.password = true;
    }
}



function checkConfirmPassword(event) {
    const confirmPasswordInput = document.querySelector('.confirm_password input');
    if (formStatus.confirmPassord = confirmPasswordInput.value === document.querySelector('.password input').value) {
        document.querySelector('.confirm_password').classList.remove('errorj');
    } else {
        document.querySelector('.confirm_password').classList.add('errorj');
    }
}

function checkSignup(event) {
    const checkbox = document.querySelector('.allow input');
    formStatus[checkbox.name] = checkbox.checked;
    if (Object.keys(formStatus).length !== 8 || Object.values(formStatus).includes(false)) {
        event.preventDefault();
    }
}

const formStatus = {'upload': true};
document.querySelector('.name input').addEventListener('blur', checkName);
document.querySelector('.surname input').addEventListener('blur', checkSurname);
document.querySelector('.username input').addEventListener('blur', checkUsername);
document.querySelector('.email input').addEventListener('blur', checkEmail);
document.querySelector('.password input').addEventListener('blur', checkPassword);
document.querySelector('.confirm_password input').addEventListener('blur', checkConfirmPassword);
document.querySelector('form').addEventListener('submit', checkSignup);

document.addEventListener('DOMContentLoaded', function() {
    function cambiaImmagine() {
      const image = document.querySelector('#logo-etnaland');
      image.src = 'immagini/logo-etnaland2.png';
    }
    function ripristinaImmagine() {
      const image = document.querySelector('#logo-etnaland');
      image.src = 'immagini/logo-etnaland1.png';
    }
    const image = document.querySelector('#logo-etnaland');
    image.addEventListener('mouseenter', cambiaImmagine);
    image.addEventListener('mouseleave', ripristinaImmagine);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const visibilityIcon = document.getElementById('visibility');

    visibilityIcon.addEventListener('click', function() {
        const isPasswordHidden = passwordField.getAttribute('type') === 'password';
        passwordField.setAttribute('type', isPasswordHidden ? 'text' : 'password');


    });
});
