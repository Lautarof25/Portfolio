let topPageScrollCount = 0
let endPageScrollCount = 0
let startY

const handleScroll = (event) => {
    const isScrollDown = event.deltaY > 0;
    isScrollDown ? endPageScrollCount++ : topPageScrollCount++

    if (endPageScrollCount >= 10) {
        const totalHeight = document.body.scrollHeight
        const visibleHeight = window.innerHeight
        const currentScrollPos = window.scrollY

        if (currentScrollPos + visibleHeight >= totalHeight) {
            endPageScrollCount = 0
            navigatePage(1)
            scrollToTop()
        }
    }

    if (window.scrollY === 0 && topPageScrollCount >= 5) {
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

    if (endPageScrollCount >= 10) {
        if (currentScrollPos + visibleHeight >= totalHeight) {
            endPageScrollCount = 0
            navigatePage(1)
            scrollToTop()
        }
    }

    if (topPageScrollCount >= 5 && window.scrollY === 0) {
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
    }, 700)
}

// Add event listeners
window.addEventListener("wheel", handleScroll)
document.addEventListener("touchstart", handleTouchStart)
document.addEventListener("touchmove", handleTouchMove)