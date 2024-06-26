buttonDown.addEventListener('click', () => navigatePage(1))
buttonUp.addEventListener('click', () => navigatePage(-1))

const navigatePage = (direction) =>{
    // External function : showPage.js
    hidePages()
    const index = direction === 1 ? nextPage() : prevPage()
    const currentId = linksArray[index]
    if(direction == 1){
        $(`.${currentId}`).classList.remove("downEffect","centerEffect")
        $(`.${currentId}`).classList.add("upEffect")
    }   
    else if(direction == -1){
        $(`.${currentId}`).classList.remove("upEffect","centerEffect")
        $(`.${currentId}`).classList.add("downEffect") 
    }
    direction = 0
    // External function : titlePage.js
    showPage(currentId)
    // External function : linksSelector.js
    removeAllClassesLinkActive()
    document.getElementById(currentId).classList.add('link-active')
    // External function : titlePage.js
    changeTitle()
    scrollToTop()
    cardsScale()
}

const nextPage = () => currentIndexPage() !== links.length-1 ? currentIndexPage() + 1 : 0

const prevPage = () =>currentIndexPage() !== 0 ? currentIndexPage() - 1 : links.length-1

const currentIndexPage = () =>linksArray.indexOf(currentIdPage())

const currentIdPage = () =>document.querySelector(".link-active").id

const scrollToTop = () => {
    setTimeout(() => {
        main.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, 100)
}