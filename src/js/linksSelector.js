const links = document.querySelectorAll('a[href="#"');

function activeLinkSelector(){
    links.forEach(link => {
        link.addEventListener('click',function(){
            removeClassLink()
            link.classList.add('link-active');
        })
    })
}

function removeClassLink(){
    links.forEach(link => link.classList.remove('link-active'));
}

activeLinkSelector()