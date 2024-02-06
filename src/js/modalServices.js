const cardsService = $$(".services .section__box")
const closeCardService = $(".closeCardService")

const closeAllCards = () => {
    cardsService.forEach(card => {
        closeModal(card)
    })
}

const closeModal = (card) => {
    closeCardServiceClick(1)
    card.children[5].classList.add("hidden")
    card.classList.remove("modalUp", "opacityEffect")
    card.classList.add("hoverCard")
    bodyOpacityEffect(0)
}

const showModal = (card) => {
    card.classList.add("modalUp", "opacityEffect")
    closeCardServiceClick(0)
    card.children[5].classList.remove("hidden")
    card.classList.remove("hoverCard")
    bodyOpacityEffect(1)
    card.style.cursor = "default"
}

const closeCardServiceClick = (mode) => {
    mode === 1 ? closeCardService.classList.add("hidden")
        : closeCardService.classList.remove("hidden")
}

const bodyOpacityEffect = (mode) => {
    mode === 1 ? body.classList.add("opacityBody")
        : body.classList.remove("opacityBody")
}

const openCloseCards = () => {
    cardsService.forEach(card => {
        card.addEventListener('click', function (event) {
            closeAllCards()
            showModal(card)
            main.scrollTo(0, 0)
            event.stopPropagation()
        })
        document.addEventListener('click', function (event) {
            if (event.target !== card) {
                closeAllCards()
                closeModal(card)
            }
        })
    })
}

openCloseCards()