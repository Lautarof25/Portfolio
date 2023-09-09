const main = document.querySelector('#main');
const links = document.querySelectorAll("nav a[href]")

links.forEach(link => {
    link.addEventListener("click", function () {
        removeLinkActive()
        removeAllDivs()
        link.classList.add("link-active")
        changeColor(link.id)
        activeDiv(link.id)
    })
})

function removeLinkActive() {
    links.forEach(link => {
        link.classList.remove("link-active")
    })
}

function removeAllDivs() {
    links.forEach(link => {
        let removeLink = link.id.replace("Link", "")
        var divTemp = document.getElementById(removeLink)
        if (!divTemp.classList.contains("d-none")) {
            divTemp.classList.add("d-none")
        }
    })
}

function activeDiv(id) {
    let idRemoving = id.replace("Link", "")
    document.getElementById(idRemoving).classList.remove("d-none")
}

function changeColor(id) {
    let idRemoving = id.replace("Link", "")
    switch (idRemoving) {
        case "info":
            document.documentElement.style.setProperty('--firstColor', '#fac722');
            break;
        case "path":
            document.documentElement.style.setProperty('--firstColor', '#fa8022');
            break;
        case "projects":
            document.documentElement.style.setProperty('--firstColor', '#fa3822');
            break;
    }
}