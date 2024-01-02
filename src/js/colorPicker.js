function handleRadioChange(radio) {
  if (radio.value === "default-color") {
      body.style.setProperty("--principal-color", "#ff5b02");
      body.style.cursor = `url("./src/img/cursor.cur") 4 12, auto`;
  } else {
      body.style.setProperty("--principal-color", radio.value);
      body.style.cursor = `url("./src/img/cursor${radio.value}.cur") 4 12, auto`;
  }
}

radios.forEach(radio => {
  radio.addEventListener("change", () => {
      handleRadioChange(radio)
  })
  radio.addEventListener("focus", () => {
    colorPicker.style.bottom = "-80px"
  })
  radio.addEventListener("focusout", () => {
    colorPicker.style.bottom = "-150px"
  })
})