const cardsService = $$(".services .section__box")
const closeCardsService = $$(".section__box .closeCard")

cardsService.forEach(card => {
    card.addEventListener("click", () =>{
        card.classList.add("modalUp")
    })
})

function closeAllCards(){
    cardsService.forEach(card => {
        card.classList.remove("modalUp")  
    })
}

closeCardsService.forEach(button => {
    button.addEventListener("click", () =>{
        if(button.parentNode.classList.contains("modalUp")){
            console.log("Yes")
            button.parentNode.classList.add("modalUp")
        }
    })
})