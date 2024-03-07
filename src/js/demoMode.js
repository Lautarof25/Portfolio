let timer = 0
const idleTime = 15
let modeDemoActivity = false

const resetTimerAndShowNextPage = () =>{
    resetTimer()
    nextPage()
    navigatePage(1)
    showDemoMode()
}

const idleTimer = () =>{
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

const resetTimerAndHideDemoMode = () =>{
    resetTimer()
    hideDemoMode()
    body.classList.remove('hide-cursor')
    modeDemoActivity = false
    grillAboutCheckbox.checked = false
    showAllCards(false)
}

const hideDemoMode = () =>{
    demoMode.classList.add('hidden')
}
const showDemoMode = () =>{
    demoMode.classList.remove('hidden')
    body.classList.add('hide-cursor')
    main.scrollTo(0,0)
    // modalServices.js
    closeAllCards()
    modeDemoOn()
    grillAboutCheckbox.checked = true
    showAllCards(true)
}

const resetTimer = () => {
    timer = 0
}

const modeDemoOn = () => {
    const currentHeightPage = main.scrollHeight
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