function createBackgroundPage(){
    const elementLinkActive = document.querySelector(".link-active")
    const svgElementCloned = elementLinkActive.childNodes[0].cloneNode(true)
    const backgroundPage = document.querySelector(".backgroundPage")
    while (backgroundPage.firstChild) {
        backgroundPage.removeChild(backgroundPage.firstChild);
    }
    backgroundPage.appendChild(svgElementCloned)
}
createBackgroundPage()

links.forEach(link => {
    link.addEventListener("click",createBackgroundPage)
})
buttonsNavigation.forEach(button => {
    button.addEventListener("click",createBackgroundPage)    
})