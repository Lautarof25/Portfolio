const cardsScale = () =>{
    if(currentIdPage() !== "home" && currentIdPage() !== "contact"){
        const boxesCard = $$(`main .${currentIdPage()} .section__box`)
        setTimeout(() => {
            boxesCard.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("scale");
                    card.classList.add("box-shadow");
                    setTimeout(() => {
                        card.classList.remove("scale");
                        card.classList.remove("box-shadow");
                    }, 500);
                }, 100 * index);
            });
        }, 1500);
    }
}