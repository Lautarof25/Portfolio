function clearForm() {
    name.value = ''
    email.value = ''
    message.value = ''
}

contact.addEventListener("click", clearForm)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ejemplo de uso:
const emailInput = document.getElementById('email');
const emailValue = emailInput.value.trim();

const namePlaceHolder = "Lautaro Fernández"
const emailPlaceHolder = "Fernandez.lautaro25@gmail.com"
const messagePlaceHolder = "👋​ Hi Lautaro, I really like your website!😍​"

let contactPageActive = false

addEventListener("change",function(){
    // if(currentIdPage() === "contact"){
    //     contactPageActive = true
    // }
    console.log("Estoy en la página "+ currentIdPage());
})

const nameCompleter = setInterval(() => {
    if (contactPageActive) {
        
    }else {
        clearInterval(nameCompleter)
    }
}, 50);