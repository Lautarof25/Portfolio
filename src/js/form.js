function clearForm() {
    "contact" === currentIdPage() && ((name.placeholder = ""), (email.placeholder = ""), (message.placeholder = ""));
}
const contact = $("#contact");
submit.addEventListener("click", clearForm);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    emailInput = $("#email"),
    emailValue = emailInput.value.trim();
let contactPageActive = !1;

function waitFor(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function fillForm() {

    const name = "Lautaro Fernández";
    const email = "Fernandez.Lautaro@hotmail.com";
    const message = "👋​ Hi Lautaro, I really like your website!😍";

    clearFormPlaceholders();

    await fillInput("name", name, true);
    await waitFor(1000);

    await fillInput("email", email, true);
    await waitFor(1000);

    await fillInput("message", message, true);

}

async function fillInput(inputId, text, gradualTyping = false) {
    const inputElement = $(`#${inputId}`);
    inputElement.placeholder = "";

    if (gradualTyping) {
        for (let i = 0; i < text.length; i++) {
            inputElement.placeholder += text[i];
            await waitFor(100);
        }
    } else {
        inputElement.value = text;
    }
}

const clearFormPlaceholders = () =>{
    const inputIds = ["name", "email", "message"];
    inputIds.forEach(id => {
        const inputElement = $(`#${id}`);
        inputElement.placeholder = "";
    });
}

const automaticForm = () =>{
    setTimeout(() => {
        fillForm();
    }, 500);
}

const handleAutomaticForm = () =>{
    if (currentIdPage() === "contact") {
        automaticForm();
    }
}