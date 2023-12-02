function changeTitlePage(){
    // Change the current title page name
    links.forEach(link => {
        link.addEventListener('click',function(){
            changeTitle()
        })
    })
}
function changeTitle() {
    titlePage.textContent = document.querySelector('.link-active').textContent
}
changeTitlePage()