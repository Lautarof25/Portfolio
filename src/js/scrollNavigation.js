let topPageScrollCount = 0
let endPageScrollCount = 0
let startY

const handleScroll = (event) => {
    const isScrollDown = event.deltaY > 0;
    isScrollDown ? endPageScrollCount++ : topPageScrollCount++
    const totalHeight = document.body.scrollHeight
    const visibleHeight = window.innerHeight
    const currentScrollPos = window.scrollY
    const isAtTheEnd = currentScrollPos + endPageScrollCount + visibleHeight >= totalHeight

    if (endPageScrollCount >= 10) {
        if (isAtTheEnd && endPageScrollCount >= 15) {
            endPageScrollCount = 0
            navigatePage(1)
            scrollToTop()
        }
    }

    if (currentScrollPos === 0 && topPageScrollCount >= 5) {
        topPageScrollCount = 0
        navigatePage(-1)
        scrollToTop()
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
        Certificaciones: 20,
        Portfolio: 15,
        default: 0
    };
    
    const activeLinkText = document.querySelector('.link-active').textContent;
    
    if (isAtTheEnd && endPageScrollCount >= 10) {
        const maxScrollCount = maxScrollCounts[activeLinkText] || maxScrollCounts.default;
    
        if (endPageScrollCount >= maxScrollCount) {
            endPageScrollCount = 0;
            navigatePage(1);
            scrollToTop();
        }
    }

    if (topPageScrollCount >= 7 && currentScrollPos === 0) {
        topPageScrollCount = 0
        navigatePage(-1)
        scrollToTop()
    }
}

const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, 1000)
}

// Keyboard navigation

document.addEventListener('keydown', function(event) {
    const ctrlKey = event.ctrlKey || event.metaKey;
    if (ctrlKey && event.key === 'ArrowUp') {
      navigatePage(-1)
    }
    if (ctrlKey && event.key === 'ArrowDown') {
      navigatePage(1)
    }
})
// Add event listeners
window.addEventListener("wheel", handleScroll)
document.addEventListener("touchstart", handleTouchStart)
document.addEventListener("touchmove", handleTouchMove)