const titlePage = document.querySelector('.titlePage h2')

titlePage.textContent = document.querySelector('.link-active').textContent

// Cuando escuchemos el evento del elemento cliqueado
function changeTittlePage(){
    links.forEach(link => {
        link.addEventListener('click',function(){
            titlePage.textContent = document.querySelector('.link-active').textContent
        })
    });
}
changeTittlePage()