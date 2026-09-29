const linksArray = []

const getLinksId = () => {
    links.forEach(link => {
        linksArray.push(link.id)
    })
}
getLinksId()

const hidePage = (link) =>{ $(`.${link}`).classList.add('hidden') }

const hidePages = () =>{
    linksArray.forEach(link => {
        hidePage(link)
    })
}

const showPage = (link)=>{
    $(`.${link}`).classList.remove('hidden')
    history.replaceState(null, '', `#${link}`)
    // External function : cardsEffect.js
    cardsScale()
    // External function : titlePage.js
    changeTitle()
}

const changePage = () => {
    links.forEach(link => {
        link.addEventListener('click',function(event){
            event.preventDefault()
            // Resetear scroll inmediatamente antes de cambiar
            main.scrollTop = 0
            hidePages()
            showPage(link.id)
            // Asegurar scroll en 0 después de mostrar la página
            requestAnimationFrame(() => {
                main.scrollTop = 0
            })
        })
    })
}
changePage()

document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash.slice(1)
    if (linksArray.includes(initialPage)) {
        removeAllClassesLinkActive()
        document.getElementById(initialPage).classList.add('link-active')
        hidePages()
        showPage(initialPage)
    }
}, { once: true })