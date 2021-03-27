const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Error message
const showError = (input, message) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}

// Success message
const showSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

// Check full name if its length greater than 4 and lesser than 20 characters
const checkFullName = (input, min, max) => {
    if(input.value === ''){
        showError(input,'Full name cannot be empty');
    }else if(input.value.length < min){
        showError(input,'Full name must be greater')
    }else if(input.value.length > max){
        showError(input,'Full name must be lesser')
    }else{
        showSuccess(input);
    }
}

// Check password if it is greater than 6 and lesser than 25
const checkPassword = (input, min, max) => {
    if(input.value === ''){
        showError(input, 'Password cannot be empty');
    }else if(input.value.length < min){
        showError(input,'Password must be greater')
    }else if(input.value.length > max){
        showError(input,'Password must be lesser')
    }else{
        showSuccess(input);
    }
}

// Event listener
form.addEventListener('submit', e => {
    e.preventDefault();

    checkEmail(email);
    checkFullName(username, 4, 20);
    checkPassword(password, 6, 25);
    arePasswordsSame(password, password2);
})
