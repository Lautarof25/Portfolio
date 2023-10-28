const demoMode = document.querySelector('.demoMode')
let timer = 0
function idleTimer() {
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