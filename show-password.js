let btn_show = document.getElementById("btn-show")
let password_input = document.getElementById("password-input")

let active_button = false

function show_password() {

    if (active_button == false) {
        active_button = true
        btn_show.className = "active-true"
        password_input.setAttribute("type", "text")
    }

    else if (active_button == true) {
        active_button = false
        btn_show.className = "active-false"
        password_input.setAttribute("type", "password")
    }
}