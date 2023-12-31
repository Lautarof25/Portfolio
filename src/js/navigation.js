buttonDown.addEventListener('click', () => navigatePage(1))
buttonUp.addEventListener('click', () => navigatePage(-1))

function navigatePage(direction) {
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
    direction === 1 ? scrollToTop() : 0
}

function nextPage() {
    return currentIndexPage() !== links.length-1 ? currentIndexPage() + 1 : 0
}

function prevPage() {
    return currentIndexPage() !== 0 ? currentIndexPage() - 1 : links.length-1
}

function currentIndexPage() {
    return linksArray.indexOf(currentIdPage())
}

function currentIdPage() {
    return document.querySelector(".link-active").id
}

const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, 1000)
}