const cardsScale = () =>{
    if(currentIdPage() !== "home" && currentIdPage() !== "contact"){
        const boxesCard = $$(`main .${currentIdPage()} .section__box`)
        setTimeout(() => {
            boxesCard.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("scale","box-shadow")
                    setTimeout(() => {
                        card.classList.remove("scale","box-shadow")
                    }, 500)
                }, 100 * index)
            });
        }, 1500);
    }
}