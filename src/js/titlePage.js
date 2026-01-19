// Optimizado: cachear elemento link-active para evitar querySelector repetido
let cachedActiveLinkForTitle = document.querySelector(".link-active")

function changeTitlePage(){
    links.forEach((e=>{
        e.addEventListener("click",(function(){
            changeTitle()
        }))
    }))
}

function changeTitle(){
    // Actualizar cache solo si el elemento cambió
    if (!cachedActiveLinkForTitle || !cachedActiveLinkForTitle.classList.contains('link-active')) {
        cachedActiveLinkForTitle = document.querySelector(".link-active")
    }
    if (cachedActiveLinkForTitle && titlePage) {
        titlePage.textContent = cachedActiveLinkForTitle.textContent
    }
}

changeTitlePage();