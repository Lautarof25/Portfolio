const body = document.querySelector("body")
const radios = document.querySelectorAll('[type="radio"]')

radios.forEach(radio => {
  radio.addEventListener("change", function(){
    body.style.setProperty("--principal-color", radio.value)
  })
})