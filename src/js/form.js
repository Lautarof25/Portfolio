function clearForm() {
    if(currentIdPage() === 'contact'){
        name.placeholder = ''
        email.placeholder = ''
        message.placeholder = ''
    }
}

const contact = document.getElementById('contact')

submit.addEventListener("click", clearForm)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Ejemplo de uso:
const emailInput = document.getElementById('email')
const emailValue = emailInput.value.trim()

let contactPageActive = false

function waitFor(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function fillForm() {
    try {
        const fictitiousName = 'Lautaro Fernández'
        const fictitiousEmail = 'Fernandez.Lautaro@hotmail.com'
        const fictitiousMessage = '👋​ Hi Lautaro, I really like your website!😍'

        await fillInput('name', fictitiousName, false)
        await waitFor(1000)

        await fillInput('email', fictitiousEmail, false)
        await waitFor(1000)

        await fillInput('message', fictitiousMessage, true)

    } catch (error) {
        console.error('Error al llenar el formulario:', error)
    }
}

async function fillInput(idField, value, isPlaceholder = false) {
    const campo = document.getElementById(idField)

    if (isPlaceholder) {
        campo.placeholder = '' // Limpia el placeholder actual
        for (let i = 0; i < value.length; i++) {
            campo.placeholder += value[i]
            // Espera un breve periodo entre cada letra
            await waitFor(100)
        }
    } else {
        campo.value = '' // Limpia el value actual
        for (let i = 0; i < value.length; i++) {
            campo.placeholder += value[i]
            // Espera un breve periodo entre cada letra
            await waitFor(100)
        }
    }
}

function automaticForm() {
    // Llama a fillForm después de 2 segundos de cargar la página (opcional)
    setTimeout(() => {
        fillForm()
    }, 500)
}

// Llama a automaticForm cuando se carga la página
function handleAutomaticForm() {
    if (currentIdPage() === "contact") {
        automaticForm();
    }
}
// TODD: implement mutuation observer for this 
addEventListener('click', handleAutomaticForm, {once: true});
addEventListener('wheel', handleAutomaticForm, {once: true});