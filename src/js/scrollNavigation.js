let topPage = false
let endPage = false
let topPageCount = 0
let endPageCount = 0

function handleScroll() {
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
    const scrollDirection = event.deltaY > 0 ? endPageCount++ : topPageCount++;
    if (window.scrollY === 0){
        
    }
    if(endPageCount === 15 ){
        endPageCount = 0
        nextPage()
        navigatePage(1)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        
    }   
    if(topPageCount === 15 ){
        topPageCount = 0
        prevPage()
        navigatePage(-1)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        
    }   
    

});