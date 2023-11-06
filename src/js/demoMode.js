let timer = 0
function idleTimer() {
    setInterval(function () {
        timer++
        if (timer === 1550) {
            nextPage()
            navigatePage(1)
            timer = 0
            demoMode.classList.remove('hidden')
            // External function : backgroundMainPage.js
            setTimeout(() => {
                createBackgroundPage()    
            }, 500);
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