const cardsService = $$(".services .section__box")
const closeCardService = $(".closeCardService")

cardsService.forEach(card => {
    card.addEventListener("click", () =>{
        card.classList.add("modalUp")
        closeCardService.classList.remove("hidden")
    })
})

function closeAllCards(){
    cardsService.forEach(card => {
        card.classList.remove("modalUp")  
    })
}

closeCardService.addEventListener("click", () =>{
    closeAllCards()
    closeCardService.classList.add("hidden")
})