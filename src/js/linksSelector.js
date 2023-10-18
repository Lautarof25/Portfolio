const links = document.querySelectorAll('a[href="#"');

links.forEach(link => {
    link.addEventListener('click',function(){
        removeClassLink(links)
        link.classList.add('link-active');
        addClassHidden(links)
        document.querySelector(`.${link.id}`).classList.remove('hidden');
    })
})

function removeClassLink(links){
    links.forEach(link => link.classList.remove('link-active'));
}

function addClassHidden(links){
    links.forEach(link => {
        document.querySelector(`.${link.id}`).classList.add('hidden');
    })
}