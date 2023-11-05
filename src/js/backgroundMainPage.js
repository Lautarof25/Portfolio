function createBackgroundPage(){
    const elementLinkActive = document.querySelector(".link-active")
    const elementCloned = elementLinkActive.childNodes[1].cloneNode(true)
    const backgroundPage = document.querySelector(".backgroundPage")
    while (backgroundPage.firstChild) {
        backgroundPage.removeChild(backgroundPage.firstChild);
    }
    backgroundPage.appendChild(elementCloned)
}
createBackgroundPage()

links.forEach(link => {
    link.addEventListener("click",createBackgroundPage)
})
buttonsNavigation.forEach(button => {
    setTimeout(() => {
        button.addEventListener("click",createBackgroundPage)    
    }, 1000);
})