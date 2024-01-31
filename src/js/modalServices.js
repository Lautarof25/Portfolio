const cardsService = $$(".services .section__box")
const closeCardService = $(".closeCardService")

function closeAllCards() {
    cardsService.forEach(card => {
        closeModal(card)
    })
}

function closeModal(card) {
    closeCardServiceClick(1)
    card.children[5].classList.add("hidden")
    card.classList.remove("modalUp")
    card.classList.remove("opacityEffect")
    card.classList.add("hoverCard")
    bodyOpacityEffect(0)
}

function showModal(card) {
    card.classList.add("modalUp")
    card.classList.add("opacityEffect")
    closeCardServiceClick(0)
    card.children[5].classList.remove("hidden")
    card.classList.remove("hoverCard")
    bodyOpacityEffect(1)
}

closeCardService.addEventListener("click", () => {
    closeAllCards()
    closeCardServiceClick(1)
    bodyOpacityEffect(0)
})

function closeCardServiceClick(mode) {
    mode === 1 ? closeCardService.classList.add("hidden") : closeCardService.classList.remove("hidden")
}

function bodyOpacityEffect(mode) {
    mode === 1 ? body.classList.add("opacityBody") : body.classList.remove("opacityBody")
}

function openCloseCards() {
    cardsService.forEach(card => {
        if (card) {
            card.addEventListener('click', function (event) {
                closeAllCards()
                showModal(card)
                main.scrollTo(0, 0)
                event.stopPropagation()
            })
        } else {
            console.error('No se encontró el botón con la clase "card"');
        }

        document.addEventListener('click', function (event) {
            if (event.target !== card) {
                closeAllCards()
                closeModal(card)
            }
        })
    })
}

openCloseCards()