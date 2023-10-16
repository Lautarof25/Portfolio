const links = document.querySelectorAll('a[href="#"');

links.forEach(link => {
    link.addEventListener('click',function(){
        removeClassLink(links)
        link.classList.add('link-active');
    })
})

function removeClassLink(links){
    links.forEach(link => link.classList.remove('link-active'));
}