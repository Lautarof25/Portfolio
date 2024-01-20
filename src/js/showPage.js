const linksArray = []
links.forEach(link => {
    linksArray.push(link.id)
})

function hidePage(link){
    $(`.${link}`).classList.add('hidden')
}

function showPage(link){
    $(`.${link}`).classList.remove('hidden')
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
        scrollToTop()
    })
})