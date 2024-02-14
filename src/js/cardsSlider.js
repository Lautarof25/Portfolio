const cards = document.querySelectorAll(".about .section__box")
const radioContainer = document.querySelector("#radioContainer")
const leftButton = document.querySelector("#leftButton")
const rightButton = document.querySelector("#rightButton")

const addRadio = (index) => {
  const label = document.createElement("label")
  const input = document.createElement("input")
  input.setAttribute("type", "radio")
  input.setAttribute("name", "options")
  input.setAttribute("id", `radio${index}`)
  index === 0 ? (input.checked = true) : null
  label.appendChild(input)
  radioContainer.appendChild(label)
}

cards.forEach((card, index) => {
  if (index !== 0) {
    card.style.display = "none"
  }
  addRadio(index)
})

const dynamicRadios = document.querySelectorAll("input[name='options']")

const checkChecked = () => {
  for (let i = 0; i < dynamicRadios.length; i++) {
    if (dynamicRadios[i].checked) {
      return i
    }
  }
  return 0 
}

leftButton.addEventListener("click", () => {
  const currentIndex = checkChecked()
  const newIndex = currentIndex === 0 ? dynamicRadios.length - 1 : currentIndex - 1
  dynamicRadios[newIndex].checked = true
  toggleCards(newIndex)
})

rightButton.addEventListener("click", () => {
  const currentIndex = checkChecked()
  const newIndex = currentIndex === dynamicRadios.length - 1 ? 0 : currentIndex + 1
  dynamicRadios[newIndex].checked = true
  toggleCards(newIndex)
})

dynamicRadios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    dynamicRadios[index].checked = true
    toggleCards(index)
  })
})

const toggleCards = (index) => {
  cards.forEach((card, i) => {
    card.style.display = i === index ? "grid" : "none"
  })
}