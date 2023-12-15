let topPage = false
let endPage = false
let topPageCount = 0
let endPageCount = 0
let startY

function handleScroll() {
    const bodyHeight = body.getBoundingClientRect().height
    // Altura total de la página, incluido el contenido no visible
    const totalHeight = document.body.scrollHeight;

    // Altura visible en la ventana del navegador
    const visibleHeight = window.innerHeight;

    // Posición actual del scroll
    const currentScrollPos = window.scrollY;

    // Compara la posición actual con cero (parte superior de la página)
    if (currentScrollPos === 0) {
        
        topPage = true
    }

    // Compara la posición actual con la posición del fin de la página
    if (currentScrollPos + visibleHeight >= totalHeight) {
        
        endPage = true
    }

}

// Agrega un listener para el evento de scroll
window.addEventListener("wheel", (event) => {
    window.addEventListener('scroll', handleScroll)
    // DeltaY indica la dirección del scroll: positivo hacia abajo, negativo hacia arriba
    event.deltaY > 0 ? endPageCount++ : topPageCount++;
    if(endPageCount >= 10 ){
        const totalHeight = document.body.scrollHeight;

        // Altura visible en la ventana del navegador
        const visibleHeight = window.innerHeight;
    
        // Posición actual del scroll
        const currentScrollPos = window.scrollY;
        if(currentScrollPos + visibleHeight >= totalHeight){
            endPageCount = 0
            navigatePage(1)
            scrollToTop()
        }
    }   
    if(window.scrollY === 0 && topPageCount >= 5 ){
        topPageCount = 0
        navigatePage(-1)
        scrollToTop()
    }   
})

document.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY;
    console.log("Empezó acá "+startY)
})

document.addEventListener("touchmove", (event) => {
    
    // DeltaY indica la dirección del scroll: positivo hacia abajo, negativo hacia arriba
    const currentY = event.touches[0].clientY;
    startY > currentY ? endPageCount++ : topPageCount++;
    // Altura total de la página, incluido el contenido no visible
    const totalHeight = document.body.scrollHeight;

    // Altura visible en la ventana del navegador
    const visibleHeight = window.innerHeight;

    // Posición actual del scroll
    const currentScrollPos = window.scrollY;
    if(endPageCount >= 5){
        if(currentScrollPos + visibleHeight >= totalHeight){
            endPageCount = 0
            navigatePage(1)
            scrollToTop()
        }
    }   
    
    if(topPageCount >= 5 && window.scrollY === 0){
        topPageCount = 0
        navigatePage(-1)
        scrollToTop()
    }   
});

function scrollToTop() {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })    
    }, 700);
}