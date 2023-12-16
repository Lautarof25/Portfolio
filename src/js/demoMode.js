let timer = 0

function resetTimerAndShowNextPage() {
    timer = 0
    nextPage()
    navigatePage(1)
    demoMode.classList.remove('hidden')
}

function idleTimer() {
    // Display the next page after a certain time of being idle
    setInterval(() => {
        timer++
        if (timer === 15) {
            resetTimerAndShowNextPage()
        }
    }, 1000)
}

idleTimer()

function resetTimerAndHideDemoMode() {
    timer = 0
    demoMode.classList.add('hidden')
}

addEventListener("mousemove", resetTimerAndHideDemoMode)
addEventListener("scroll", resetTimerAndHideDemoMode)
addEventListener("keydown", resetTimerAndHideDemoMode)