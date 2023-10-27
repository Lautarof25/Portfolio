const buttonDown = document.querySelector('.fa-chevron-down');
const buttonUp = document.querySelector('.fa-chevron-up');

// Todo: Cómo hacerlo?
/* 
Crear una función para cambiar la página actual a partir de dos botones de flechas
- changeCurrentPage()

Consultar página actual
- currentIdPage()

Consultar un array de las páginas (ordenadas)
- linksArray

Qué posición ocupa la página actual con el indice del array de la página
- currentIndexPage()
- currentPage() = "home" --> linksArray["home"]

Crear una función para pasar al siguiente elemento del array, que consulte la página actual coincidida con el array de las páginas
- nextPage()

Crear una función para pasar al anterior elemento del array, que consulte la página actual coincidida con el array de las páginas
- prevPage()

Modificar la clase "link-active" para que se situe en el nuevo link
- addClassLinkActive(link)
- removeAllClassesLinkActive()

Añadir la clase "hidden" de la página actual  y quitarsela a la página siguiente o previa
- hidePages()
- showPage(link)

Modificar el titulo de la página actual
- changeTitlePage(element)

*/


function changeCurrentPage() {
    buttonDown.addEventListener('click', function() {
        hidePages()
        showPage(linksArray[nextPage()])
        const currentId = linksArray[nextPage()]
        removeAllClassesLinkActive()
        document.getElementById(currentId).classList.add('link-active')
        titlePage.textContent = document.querySelector('.link-active').textContent
    })
    buttonUp.addEventListener('click', function() {
        hidePages()
        showPage(linksArray[prevPage()])
        const currentId = linksArray[prevPage()]
        removeAllClassesLinkActive()
        document.getElementById(currentId).classList.add('link-active')
        titlePage.textContent = document.querySelector('.link-active').textContent
    })   
}

function nextPage() {
    return currentIndexPage() !== 5 ? currentIndexPage() + 1 : 0
}

function prevPage() {
    return currentIndexPage() !== 0 ? currentIndexPage() - 1 : 5
}

function currentIndexPage() {
    return linksArray.indexOf(currentIdPage())
}

function currentIdPage(){
    return document.querySelector(".link-active").id
}

changeCurrentPage()