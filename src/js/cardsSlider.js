const cards = $$(".about .section__box")
const radioContainer = $("#radioContainer")
const leftButton = $("#leftButton")
const rightButton = $("#rightButton")

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

const checkFirstCheckbox = () => {
  cards.forEach((card, index) => {
    if (index !== 0) {
      card.style.display = "none"
    }
    addRadio(index)
  })
}

checkFirstCheckbox()

const dynamicRadios = $$("input[name='options']")

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
  toggleCards(newIndex,"leftEffect")
})

rightButton.addEventListener("click", () => {
  const currentIndex = checkChecked()
  const newIndex = currentIndex === dynamicRadios.length - 1 ? 0 : currentIndex + 1
  dynamicRadios[newIndex].checked = true
  toggleCards(newIndex,"rightEffect")
})

dynamicRadios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    dynamicRadios[index].checked = true
    toggleCards(index,"opacityEffect")
  })
})

const toggleCards = (index,effect) => {
  cards.forEach((card, i) => {
    card.style.display = i === index ? "grid" : "none"
    card.classList.remove("rightEffect","leftEffect","opacityEffect")
    card.classList.add(effect)
  })
}

const showAllCards = (activate) => {
  if(activate){
    cards.forEach(card => {
      card.style.display = "block"
    })
  }else {
    cards.forEach((card,i)=> {
      if(i !== 0)
        card.style.display = "none"
    })
  }
}

const grillAbout = $("#grillAbout")

grillAbout.addEventListener("change", ()=>{
  if(grillAbout.checked){
    document.querySelector(".container__buttons").style.display = "none"
    showAllCards(true)
  }else {
    document.querySelector(".container__buttons").style.display = "grid"
    showAllCards(false)
  }
})