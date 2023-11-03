function activeLinkSelector(){
    links.forEach(link => {
        link.addEventListener('click',function(){
            removeAllClassesLinkActive()
            addClassLinkActive(link);
        })
    })
}

function addClassLinkActive(link) {
    link.classList.add('link-active');
}

function removeAllClassesLinkActive(){
    links.forEach(link => link.classList.remove('link-active'));
}

activeLinkSelector()