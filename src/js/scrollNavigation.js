let topPageScrollCount = 0
let endPageScrollCount = 0
let startY

const handleScroll = (event) => {
    const isScrollDown = event.deltaY > 0
    const scrollPosition = main.scrollTop + main.clientHeight + 2;
    const scrollPositionTop = main.scrollTop;
    const totalHeight = main.scrollHeight;
    const isAtTheEndOfMain = scrollPosition >= totalHeight
    if(isAtTheEndOfMain){
        isScrollDown ? endPageScrollCount++ : endPageScrollCount--
        if(endPageScrollCount > 5){
            navigatePage(1)    
            endPageScrollCount = 0
            topPageScrollCount = 0
        }
    }
    if(scrollPositionTop === 0){
        isScrollDown ? topPageScrollCount-- : topPageScrollCount++
        if(topPageScrollCount > 5){
            navigatePage(-1)    
            topPageScrollCount = 0
            endPageScrollCount = 0
        }
    }
}

const handleTouchStart = (event) => {
    startY = event.touches[0].clientY
}

const handleTouchMove = (event) => {
    const currentY = event.touches[0].clientY
    startY > currentY ? endPageScrollCount++ : topPageScrollCount++

    const totalHeight = main.scrollHeight
    const scrollPosition = main.scrollTop + main.clientHeight + 1;
    const scrollPositionTop = main.scrollTop;
    const isAtTheEnd = scrollPosition >= totalHeight

    if (isAtTheEnd) {
        startY > currentY ? endPageScrollCount++ : endPageScrollCount--
        if (endPageScrollCount > 8) {
            endPageScrollCount = 0
            topPageScrollCount = 0
            navigatePage(1)
        }
    }

    if (scrollPositionTop === 0) {
        startY > currentY ? topPageScrollCount-- : topPageScrollCount++
        if(topPageScrollCount > 8){
            topPageScrollCount = 0
            endPageScrollCount = 0
            navigatePage(-1)
        }
    }
}

// Keyboard navigation

const scrollKeyboard = (event) =>{
    const ctrlKey = event.ctrlKey || event.metaKey;
    if (ctrlKey && event.key === 'ArrowDown') {
        navigatePage(1)
    }
    if (ctrlKey && event.key === 'ArrowUp') {
        navigatePage(-1)
    }
}

// Add event listeners
document.addEventListener('keydown', scrollKeyboard,{passive: true})
main.addEventListener("wheel", handleScroll,{passive: true})
document.addEventListener("touchstart", handleTouchStart,{passive: true})
document.addEventListener("touchmove", handleTouchMove,{passive: true})