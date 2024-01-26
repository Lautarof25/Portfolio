const boxesCard = $$("main .section__box")

function cardsScale() {
    if(currentIdPage() !== "home" && currentIdPage() !== "contact"){
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
        }, 500);
    }
}