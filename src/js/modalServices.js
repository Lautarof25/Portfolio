const cardsService = $$(".services .section__box")
const closeCardService = $(".closeCardService")

function closeAllCards() {
    cardsService.forEach(card => {
        // The Ul element
        card.children[5].classList.add("hidden")
        card.classList.remove("modalUp")
        card.classList.remove("opacityEffect")
    })
}

closeCardService.addEventListener("click", () => {
    closeAllCards()
    closeCardService.classList.add("hidden")
    body.classList.remove("opacityBody")
})

function openCloseCards() {
    cardsService.forEach(card => {
        if (card) {
            card.addEventListener('click', function (event) {
                closeAllCards()
                card.classList.add("modalUp")
                card.classList.add("opacityEffect")
                // The Ul element
                card.children[5].classList.remove("hidden")
                closeCardService.classList.remove("hidden")
                card.classList.remove("hoverCard")
                body.classList.add("opacityBody")
                main.scrollTo(0,0)
                event.stopPropagation()
            })
        } else {
            console.error('No se encontró el botón con la clase "card"');
        }

        document.addEventListener('click', function (event) {
            if (event.target !== card) {
                closeAllCards()
                closeCardService.classList.add("hidden")
                card.classList.add("hoverCard")
                card.classList.remove("opacityEffect")
                body.classList.remove("opacityBody")
            }
        })
    })
}

openCloseCards()