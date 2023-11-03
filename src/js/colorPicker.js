radios.forEach(radio => {
  radio.addEventListener("change", function(){
    body.style.setProperty("--principal-color", radio.value)
  })
})