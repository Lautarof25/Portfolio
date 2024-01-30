const cardsService = $$(".services .section__box")
const closeCardService = $(".closeCardService")

cardsService.forEach(card => {
    card.addEventListener("click", () =>{
        closeAllCards()
        card.classList.add("modalUp")
        // The Ul element
        card.children[5].classList.remove("hidden")
        closeCardService.classList.remove("hidden")
    })
})

function closeAllCards(){
    cardsService.forEach(card => {
        // The Ul element
        card.children[5].classList.add("hidden")
        card.classList.remove("modalUp")  
    })
}

closeCardService.addEventListener("click", () =>{
    closeAllCards()
    closeCardService.classList.add("hidden")
})