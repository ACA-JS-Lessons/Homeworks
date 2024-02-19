const password = document.getElementById("login-password");
const show = document.getElementById("login-show");
show.addEventListener("mousedown", function () {
    password.setAttribute("type", "text");
})

show.addEventListener("mouseup", function () {
    password.setAttribute("type", "password");
})
show.addEventListener("mouseleave", function () {
    password.setAttribute("type", "password");
})


document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
})
