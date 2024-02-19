const password = document.getElementById("login-password");
const show = document.getElementById("login-show");
const validatePass = document.getElementById("validation-password");


// password validation
password.addEventListener("input", e => {
    validatePassword(e.target.value.length > 8, '.length')
    validatePassword(e.target.value.search(/[A-Z]+/) > -1, '.upper')
    validatePassword(e.target.value.search(/[a-z]+/) > -1, '.lower')
    validatePassword(e.target.value.search(/\d+/) > -1, '.digit')
    validatePassword(e.target.value.search(/[\@\$\!\#\%\&\^]+/) > -1, '.symbols')
})

function validatePassword(condition, className){
    if(condition){
        validatePass.querySelector(className).classList.add('correct')
    }else{
        validatePass.querySelector(className).classList.remove('correct')
    }
}