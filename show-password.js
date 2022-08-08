let btn_show = document.getElementById("btn-show")
let password_input = document.getElementById("password-input")

function show_password() {
    if (btn_show.className == "active-false") {
        btn_show.className = "active-true"
        password_input.setAttribute("type", "text")
    }

    else if (btn_show.className == "active-true") {
        btn_show.className = "active-false"
        password_input.setAttribute("type", "password")
    }
}