const cardsAbout = document.querySelectorAll(".about .section__box")
links.forEach(link => {
    link.addEventListener("click", () => {
        if (currentIdPage() === "about") {
            cardsScale()
        }
    })
})

buttonsNavigation.forEach(link => {
    link.addEventListener("click", () => {
        if (currentIdPage() === "about") {
            cardsScale()
        }
    })
})

main.addEventListener("wheel", () => {
    if (currentIdPage() === "about") {
        cardsScale()
    }
})

function cardsScale() {
    setTimeout(() => {

        cardsAbout.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("scale")

                setTimeout(() => {
                    card.classList.remove("scale")
                }, 500)
            }, 100 * index)
        })
    }, 2000);
}