let timer = 0
const idleTime = 15
let modeDemoActivity = false

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

// TODO: create an event handler to handle when the page is in the background

const resetTimerAndShowNextPage = () =>{
    resetTimer()
    navigatePage(1)
    showDemoMode()
}

const resetTimerAndHideDemoMode = () =>{
    resetTimer()
    hideDemoModePopUp(1)
    hideCursor(0)
    modeDemoActivity = false
}

const hideCursor = (mode) => {
    mode === 0 ? body.classList.remove('hide-cursor') : body.classList.add('hide-cursor');
}

const hideDemoModePopUp = (mode) =>{
   mode === 0 ? demoMode.classList.remove('hidden') : demoMode.classList.add('hidden');
}

const showDemoMode = () =>{
    hideDemoModePopUp(0)
    hideCursor(1)
    main.scrollTo(0,0)
    // modalServices.js
    closeAllCards()
    modeDemoOn()
    setCheckboxValue(true)
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