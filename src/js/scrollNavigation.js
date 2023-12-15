let topPageCount = 0
let endPageCount = 0
let startY

const handleScroll = (event) => {
    const isScrollDown = event.deltaY > 0;
    isScrollDown ? endPageCount++ : topPageCount++

    if (endPageCount >= 10) {
        const totalHeight = document.body.scrollHeight
        const visibleHeight = window.innerHeight
        const currentScrollPos = window.scrollY

        if (currentScrollPos + visibleHeight >= totalHeight) {
            endPageCount = 0
            navigatePage(1)
            scrollToTop()
        }
    }

    if (window.scrollY === 0 && topPageCount >= 5) {
        topPageCount = 0
        navigatePage(-1)
        scrollToTop()
    }
}

const handleTouchStart = (event) => {
    startY = event.touches[0].clientY
}

const handleTouchMove = (event) => {
    const currentY = event.touches[0].clientY
    startY > currentY ? endPageCount++ : topPageCount++

    const totalHeight = document.body.scrollHeight
    const visibleHeight = window.innerHeight
    const currentScrollPos = window.scrollY

    if (endPageCount >= 5) {
        if (currentScrollPos + visibleHeight >= totalHeight) {
            endPageCount = 0
            navigatePage(1)
            scrollToTop()
        }
    }

    if (topPageCount >= 5 && window.scrollY === 0) {
        topPageCount = 0
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