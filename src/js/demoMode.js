let timer = 0
const idleTime = 15
let modeDemoActivity = false

function resetTimerAndShowNextPage() {
    resetTimer()
    nextPage()
    navigatePage(1)
    showDemoMode()
}

function idleTimer() {
    // Display the next page after a certain time of being idle
    setInterval(() => {
        timer++
        if (timer === idleTime) {
            resetTimerAndShowNextPage()
            modeDemoActivity = true
        }
    }, 1000)
}

idleTimer()

function resetTimerAndHideDemoMode() {
    resetTimer()
    hideDemoMode()
    modeDemoActivity = false
}

function hideDemoMode() {
    demoMode.classList.add('hidden')
}
function showDemoMode() {
    demoMode.classList.remove('hidden')
    window.scrollTo(0,0)
    modeDemoOn()
}

function resetTimer() {
    timer = 0
}

function modeDemoOn(){
     // Obtener la altura total de la página
     const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );

    // Configurar la cantidad de píxeles que deseas recorrer en cada paso
    const scrollStep = 1;

    // Configurar el intervalo de tiempo entre cada paso (en milisegundos)
    const scrollInterval = 50;

    // Iniciar el bucle de scroll
    let scrollPosition = 0;
    const scrollIntervalId = setInterval(function() {
        // Calcular la nueva posición de scroll
        const targetScrollPosition = scrollPosition + scrollStep;

        // Hacer scroll a la nueva posición
        window.scrollTo(0, targetScrollPosition);

        // Actualizar la posición actual de scroll
        scrollPosition = targetScrollPosition;

        // Verificar hay actividad del usuario
        if (!modeDemoActivity) {
            // Detener el bucle 
            clearInterval(scrollIntervalId);
        }
    }, scrollInterval);
}

addEventListener("mousemove", resetTimerAndHideDemoMode)
addEventListener("touchmove", resetTimerAndHideDemoMode)
addEventListener("click", resetTimerAndHideDemoMode)
addEventListener("keydown", resetTimerAndHideDemoMode)