let timer = 0
const idleTime = 15
let miliseconds = 1000

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
        }
    }, miliseconds)
}

idleTimer()

function resetTimerAndHideDemoMode() {
    resetTimer()
    hideDemoMode()
}

function hideDemoMode() {
    demoMode.classList.add('hidden')
    // miliseconds = 0
}
function showDemoMode() {
    demoMode.classList.remove('hidden')
    // miliseconds = 1000
    // window.scrollTo(0,0)
    // demoModeScroll()
}

function resetTimer() {
    timer = 0
}

function demoModeScroll() {
    const currentHeightPage = document.body.scrollHeight
    const scrollPerSecond = currentHeightPage / idleTime
    let currentScroll = 0

    const scrollInterval = setInterval(() => {
        
        // Verifica si ya se ha llegado al final de la página
        if (currentScroll >= currentHeightPage) {
            clearInterval(scrollInterval); // Detén el intervalo si ya no hay más contenido
            return;
        }

        // Haz scroll a la posición actual
        window.scrollTo({
            top: currentScroll,
            left: 0,
            behavior: "smooth",
          })

        // Actualiza la posición de scroll para el próximo segundo
        currentScroll += scrollPerSecond
    }, miliseconds)
}

addEventListener("mousemove", resetTimerAndHideDemoMode)
addEventListener("touchmove", resetTimerAndHideDemoMode)
// addEventListener("scroll", resetTimerAndHideDemoMode)
addEventListener("click", resetTimerAndHideDemoMode)
addEventListener("keydown", resetTimerAndHideDemoMode)