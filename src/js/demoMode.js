let timer = 0
function idleTimer() {
    // display next page when certain time in idle
    setInterval(function () {
        timer++
        if (timer === 15) {
            nextPage()
            navigatePage(1)
            timer = 0
            demoMode.classList.remove('hidden')
        }
    },
        1000)
}

idleTimer()

addEventListener("mousemove", function () {
    timer = 0
    demoMode.classList.add('hidden')
})
addEventListener("scroll", function () {
    timer = 0
    demoMode.classList.add('hidden')
})
addEventListener("keydown", function () {
    timer = 0
    demoMode.classList.add('hidden')
})