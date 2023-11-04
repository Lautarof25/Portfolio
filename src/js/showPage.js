const linksArray = []
links.forEach(link => {
    linksArray.push(link.id);
})

function hidePage(link){
    document.querySelector(`.${link}`).classList.add('hidden')
}

function showPage(link){
    document.querySelector(`.${link}`).classList.remove('hidden')
    // External function : titlePage.js
    changeTitle()
}

function hidePages(){
    linksArray.forEach(link => {
        hidePage(link)
    })
}

links.forEach(link => {
    link.addEventListener('click',function(){
        hidePages()
        showPage(link.id)
    })
})