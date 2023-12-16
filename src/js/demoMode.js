let timer = 0

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
        if (timer === 15) {
            resetTimerAndShowNextPage()
        }
    }, 1000)
}

idleTimer()

function resetTimerAndHideDemoMode() {
    resetTimer()
    hideDemoMode()
}

function hideDemoMode(){
    demoMode.classList.add('hidden')
}
function showDemoMode(){
    demoMode.classList.remove('hidden')
}

function resetTimer(){
    timer = 0
}

addEventListener("mousemove", resetTimerAndHideDemoMode)
addEventListener("scroll", resetTimerAndHideDemoMode)
addEventListener("click", resetTimerAndHideDemoMode);
addEventListener("keydown", resetTimerAndHideDemoMode)