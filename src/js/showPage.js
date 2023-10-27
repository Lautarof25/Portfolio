const linksArray = []
links.forEach(link => {
    linksArray.push(link.id);
})

function hidePage(link){
    document.querySelector(`.${link}`).classList.add('hidden')
}

function showPage(link){
    document.querySelector(`.${link}`).classList.remove('hidden')
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