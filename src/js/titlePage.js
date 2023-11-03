titlePage.textContent = document.querySelector('.link-active').textContent

function changeTittlePage(){
    links.forEach(link => {
        link.addEventListener('click',function(){
            changeTitle();
        })
    });
}
function changeTitle() {
    titlePage.textContent = document.querySelector('.link-active').textContent;
}
changeTittlePage()