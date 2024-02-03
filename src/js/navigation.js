buttonDown.addEventListener('click', () => navigatePage(1))
buttonUp.addEventListener('click', () => navigatePage(-1))

const navigatePage = (direction) =>{
    // External function : showPage.js
    hidePages()
    const index = direction === 1 ? nextPage() : prevPage()
    const currentId = linksArray[index]
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

const nextPage = () =>{
    return currentIndexPage() !== links.length-1 ? currentIndexPage() + 1 : 0
}

const prevPage = () =>{
    return currentIndexPage() !== 0 ? currentIndexPage() - 1 : links.length-1
}

const currentIndexPage = () =>{
    return linksArray.indexOf(currentIdPage())
}

const currentIdPage = () =>{
    return document.querySelector(".link-active").id
}

const scrollToTop = () => {
    setTimeout(() => {
        main.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, 1000)
}