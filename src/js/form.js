const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

function clearForm() {
    name.value = ''
    email.value = ''
    message.value = ''
}

contact.addEventListener("click", clearForm)