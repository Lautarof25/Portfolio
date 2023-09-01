const main = document.querySelector('#main');
const links = document.querySelectorAll("nav a[href]")

links.forEach(link => {
    link.addEventListener("click",function(){
        removeLinkActive()
        link.classList.add("link-active")
        console.log(link.id)
        activeDiv(link.id)
    })
})

function removeLinkActive(){
    links.forEach(link => {
        link.classList.remove("link-active")
    })  
}

function activeDiv(id){
    document.getElementById(id).classList.remove("d-none")
}