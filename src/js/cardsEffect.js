const boxesCard = $$("main .section__box")

function cardsScale() {
    setTimeout(() => {
        boxesCard.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("scale");

                setTimeout(() => {
                    card.classList.remove("scale");
                }, 500);
            }, 100 * index);
        });
    }, 500);
}