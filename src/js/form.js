function clearForm() {
    "contact" === currentIdPage() && ((name.placeholder = ""), (email.placeholder = ""), (message.placeholder = ""));
}
const contact = document.getElementById("contact");
submit.addEventListener("click", clearForm);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    emailInput = document.getElementById("email"),
    emailValue = emailInput.value.trim();
let contactPageActive = !1;
function waitFor(e) {
    return new Promise((t) => setTimeout(t, e));
}
async function fillForm() {
    try {
        const e = "Lautaro Fernández",
            t = "Fernandez.Lautaro@hotmail.com",
            a = "👋​ Hi Lautaro, I really like your website!😍";
        clearForm(), await fillInput("name", e, !1), await waitFor(1e3), await fillInput("email", t, !1), await waitFor(1e3), await fillInput("message", a, !0);
    } catch (e) {}
}
async function fillInput(e, t, a = !1) {
    const n = document.getElementById(e);
    if (a) {
        n.placeholder = "";
        for (let e = 0; e < t.length; e++) (n.placeholder += t[e]), await waitFor(100);
    } else {
        n.value = "";
        for (let e = 0; e < t.length; e++) (n.placeholder += t[e]), await waitFor(100);
    }
}
function automaticForm() {
    setTimeout(() => {
        fillForm();
    }, 500);
}
function handleAutomaticForm() {
    "contact" === currentIdPage() && automaticForm();
}