radios.forEach(radio => {
  radio.addEventListener("change", function(){
    if (radio.value === "default-color") {
      body.style.setProperty("--principal-color", "#ff5b02")
    }else 
      body.style.setProperty("--principal-color", radio.value)
  })
})