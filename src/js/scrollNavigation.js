let topPageScrollCount = 0
let endPageScrollCount = 0
let startY

const handleScroll = (event) => {
    const isScrollDown = event.deltaY > 0
    const scrollPosition = main.scrollTop + main.clientHeight + 1;
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

    const totalHeight = document.body.scrollHeight
    const visibleHeight = window.innerHeight
    const currentScrollPos = window.scrollY
    const isAtTheEnd = currentScrollPos + endPageScrollCount + visibleHeight >= totalHeight

    const maxScrollCounts = {
        Certificaciones: 45,
        Portfolio: 40,
        "Sobre mi": 40,
        default: 0
    };

    const activeLinkText = document.querySelector('.link-active').textContent;

    if (isAtTheEnd && endPageScrollCount >= 10) {
        const maxScrollCount = maxScrollCounts[activeLinkText] || maxScrollCounts.default;

        if (endPageScrollCount >= maxScrollCount) {
            endPageScrollCount = 0;
            navigatePage(1);
        }
    }

    if (topPageScrollCount >= 7 && currentScrollPos === 0) {
        topPageScrollCount = 0
        navigatePage(-1)
    }
}

// Keyboard navigation

function scrollKeyboard(event) {
    const ctrlKey = event.ctrlKey || event.metaKey;
    if (ctrlKey && event.key === 'ArrowDown') {
        navigatePage(1)
    }
    if (ctrlKey && event.key === 'ArrowUp') {
        navigatePage(-1)
    }
}

// Add event listeners
document.addEventListener('keydown', scrollKeyboard)
main.addEventListener("wheel", handleScroll)
document.addEventListener("touchstart", handleTouchStart)
document.addEventListener("touchmove", handleTouchMove)