const handleRadioChange = (radio) => {
  if (radio.value === "default-color") {
    body.style.setProperty("--principal-color", "#ff5b02")
    body.style.cursor = `url("./src/img/cursor.cur") 4 12, auto`
    document.querySelector("link[rel~='icon']").href = "./src/img/iconweb.ico"
  } else {
    body.style.setProperty("--principal-color", radio.value)
    body.style.cursor = `url("./src/img/cursor${radio.value}.cur") 4 12, auto`
    document.querySelector("link[rel~='icon']").href = `./src/img/${radio.value}.ico`
  }
}

freeColor.addEventListener("input", () => {
  body.style.setProperty("--principal-color", `${freeColor.value}`)
  body.style.cursor = "default"
})

colorPicker.addEventListener("mouseover", function () {
  colorPicker.style.bottom = "-80px"
})
colorPicker.addEventListener("mouseout", function () {
  if (window.innerWidth <= 576) {
    colorPicker.style.bottom = "-150px"
  } else {
    colorPicker.style.bottom = "-180px"
  }
})

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    handleRadioChange(radio)
  })
  radio.addEventListener("focus", () => {
    colorPicker.style.bottom = "-80px"
  })
  radio.addEventListener("focusout", () => {
    if (window.innerWidth <= 576) {
      colorPicker.style.bottom = "-150px"
    } else {
      colorPicker.style.bottom = "-180px"
    }
  })
})