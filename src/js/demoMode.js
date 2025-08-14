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
    const currentHeightPage = main.scrollHeight;
    const scrollDuration = idleTime * 1000; // Convert to milliseconds
    const startTime = Date.now();
    const startPosition = main.scrollTop;
    
    const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const smoothScroll = () => {
        if (!modeDemoActivity) return;
        
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        
        // Apply easing function
        const easedProgress = easeInOutQuad(progress);
        
        // Calculate new scroll position
        const newPosition = startPosition + (currentHeightPage - startPosition) * easedProgress;
        
        main.scrollTo({
            top: newPosition,
            left: 0,
            behavior: "auto" // Using auto for smoother animation
        });
        
        if (progress < 1) {
            requestAnimationFrame(smoothScroll);
        }
    };
    
    requestAnimationFrame(smoothScroll);
}

addEventListener("mousemove", resetTimerAndHideDemoMode)
addEventListener("wheel", resetTimerAndHideDemoMode)
addEventListener("touchmove", resetTimerAndHideDemoMode)
addEventListener("click", resetTimerAndHideDemoMode)
addEventListener("keydown", (event) => {
    // Check if user is typing in a form input, textarea, or contenteditable element
    const target = event.target;
    const isTyping = target.tagName === 'INPUT' || 
                     target.tagName === 'TEXTAREA' || 
                     target.tagName === 'SELECT' ||
                     target.contentEditable === 'true' ||
                     target.isContentEditable;
    
    // If user is typing, don't reset timer
    if (isTyping) {
        return;
    }
    
    resetTimerAndHideDemoMode();
})