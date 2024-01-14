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
    main.scrollTo(0,0)
    modeDemoOn()
}

function resetTimer() {
    timer = 0
}

function modeDemoOn(){
    const currentHeightPage = document.body.scrollHeight
    const scrollPerSecond = currentHeightPage / idleTime
    let currentScroll = 0
    const refreshIntervalId = setInterval(() => {
        if (currentScroll <= currentHeightPage && modeDemoActivity) {
            main.scrollTo({
                top: currentScroll,
                left: 0,
                behavior: "smooth",
              })
            currentScroll += scrollPerSecond
        }else {
            clearInterval(refreshIntervalId)
        }
    }, 1000)
}

addEventListener("mousemove", resetTimerAndHideDemoMode)
addEventListener("wheel", resetTimerAndHideDemoMode)
addEventListener("touchmove", resetTimerAndHideDemoMode)
addEventListener("click", resetTimerAndHideDemoMode)
addEventListener("keydown", resetTimerAndHideDemoMode)