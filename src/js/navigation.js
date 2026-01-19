buttonDown.addEventListener('click', () => navigatePage(1))
buttonUp.addEventListener('click', () => navigatePage(-1))

const navigatePage = (direction) =>{
    // Resetear scroll inmediatamente ANTES de cambiar de página
    main.scrollTop = 0
    
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
    
    // Asegurar que el scroll esté en 0 después de mostrar la página
    requestAnimationFrame(() => {
        main.scrollTop = 0
    })
    
    cardsScale()
    
    // Keep focus on main element for keyboard navigation
    setTimeout(() => {
        main.focus()
    }, 200)
}

const nextPage = () => currentIndexPage() !== links.length-1 ? currentIndexPage() + 1 : 0

const prevPage = () =>currentIndexPage() !== 0 ? currentIndexPage() - 1 : links.length-1

const currentIndexPage = () =>linksArray.indexOf(currentIdPage())

const currentIdPage = () =>document.querySelector(".link-active").id

const scrollToTop = () => {
    // Scroll inmediato sin animación para evitar que la nueva página aparezca desde abajo
    main.scrollTop = 0
    // Usar requestAnimationFrame para asegurar que se ejecute después del render
    requestAnimationFrame(() => {
        main.scrollTop = 0
    })
}