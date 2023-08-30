const main = document.querySelector('#main');
const links = document.querySelectorAll("nav a[href]")

links.forEach(link => {
    link.addEventListener("click",function(){
        removeLinkActive()
        link.classList.add("link-active")
    })
})

function removeLinkActive(){
    links.forEach(link => {
        link.classList.remove("link-active")
    })  
}

