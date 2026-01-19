const cardsService = $$(".services .section__box")
const closeCardService = $(".closeCardService")

const closeAllCards = () => {
    // Optimizado: solo procesar cards que están abiertas
    cardsService.forEach(card => {
        if (card.classList.contains("modalUp")) {
            closeModal(card)
        }
    })
    currentOpenCard = null
}

const closeModal = (card) => {
    // Solo cerrar si la card está realmente abierta
    if (!card.classList.contains("modalUp")) return
    
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

// Optimizado: usar un solo listener en document con delegación en lugar de múltiples listeners
let currentOpenCard = null

const openCloseCards = () => {
    cardsService.forEach(card => {
        card.addEventListener('click', function (event) {
            // Solo cerrar todas si hay una card abierta diferente
            if (currentOpenCard && currentOpenCard !== card) {
                closeAllCards()
            }
            showModal(card)
            currentOpenCard = card
            main.scrollTo(0, 0)
            event.stopPropagation()
        })
    })
    
    // Un solo listener en document para cerrar cards al hacer click fuera
    document.addEventListener('click', function (event) {
        // Verificar si el click fue fuera de cualquier card de servicio
        const clickedCard = event.target.closest('.services .section__box')
        if (!clickedCard && currentOpenCard) {
            closeAllCards()
            currentOpenCard = null
        }
    })
}

openCloseCards()