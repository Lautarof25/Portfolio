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
    // External function : cardsEffect.js
    cardsScale()
    // External function : titlePage.js
    changeTitle()
}

const changePage = () => {
    links.forEach(link => {
        link.addEventListener('click',function(){
            hidePages()
            showPage(link.id)
            scrollToTop()
        })
    })
}
changePage()