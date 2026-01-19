let topPageScrollCount = 0
let endPageScrollCount = 0
let startY
let lastScrollTime = 0
const SCROLL_THROTTLE_MS = 16 // ~60fps, muy sutil

const handleScroll = (event) => {
    // Throttle muy sutil: solo limita frecuencia sin cambiar lógica
    const now = performance.now()
    if (now - lastScrollTime < SCROLL_THROTTLE_MS) return
    lastScrollTime = now
    
    // Cachear propiedades del scroll para evitar múltiples accesos
    const scrollTop = main.scrollTop
    const clientHeight = main.clientHeight
    const scrollHeight = main.scrollHeight
    
    const isScrollDown = event.deltaY > 0
    const scrollPosition = scrollTop + clientHeight + 2;
    const scrollPositionTop = scrollTop;
    const isAtTheEndOfMain = scrollPosition >= scrollHeight
    
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

    // Cachear propiedades para evitar múltiples accesos
    const scrollTop = main.scrollTop
    const clientHeight = main.clientHeight
    const scrollHeight = main.scrollHeight
    const scrollPosition = scrollTop + clientHeight + 1;
    const scrollPositionTop = scrollTop;
    const isAtTheEnd = scrollPosition >= scrollHeight

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
    // Check if user is typing in a form input, textarea, or contenteditable element
    const target = event.target;
    const isTyping = target.tagName === 'INPUT' || 
                     target.tagName === 'TEXTAREA' || 
                     target.tagName === 'SELECT' ||
                     target.contentEditable === 'true' ||
                     target.isContentEditable;
    
    // If user is typing, don't handle navigation
    if (isTyping) {
        return;
    }
    
    const ctrlKey = event.ctrlKey || event.metaKey;
    
    // Navigation with Ctrl + arrows (existing functionality)
    if (ctrlKey && event.key === 'ArrowDown') {
        navigatePage(1)
    }
    if (ctrlKey && event.key === 'ArrowUp') {
        navigatePage(-1)
    }
    
    // Direct navigation with arrow keys (faster than scroll simulation)
    if (event.key === 'ArrowDown') {
        const scrollPosition = main.scrollTop + main.clientHeight + 2;
        const totalHeight = main.scrollHeight;
        const isAtTheEndOfMain = scrollPosition >= totalHeight
        
        if (isAtTheEndOfMain) {
            endPageScrollCount += 3; // Increment faster for keyboard
            if (endPageScrollCount > 2) { // Lower threshold for keyboard
                navigatePage(1)
                endPageScrollCount = 0
                topPageScrollCount = 0
            }
        } else {
            // If not at the end, just scroll down normally
            const scrollEvent = new WheelEvent('wheel', {
                deltaY: 100,
                bubbles: true
            });
            main.dispatchEvent(scrollEvent);
        }
    }
    
    if (event.key === 'ArrowUp') {
        const scrollPositionTop = main.scrollTop;
        
        if (scrollPositionTop === 0) {
            topPageScrollCount += 3; // Increment faster for keyboard
            if (topPageScrollCount > 2) { // Lower threshold for keyboard
                navigatePage(-1)
                topPageScrollCount = 0
                endPageScrollCount = 0
            }
        } else {
            // If not at the top, just scroll up normally
            const scrollEvent = new WheelEvent('wheel', {
                deltaY: -100,
                bubbles: true
            });
            main.dispatchEvent(scrollEvent);
        }
    }
}

// Add event listeners
document.addEventListener('keydown', scrollKeyboard,{passive: true})
main.addEventListener("wheel", handleScroll,{passive: true})
document.addEventListener("touchstart", handleTouchStart,{passive: true})
document.addEventListener("touchmove", handleTouchMove,{passive: true})

// Ensure main element can receive focus and handle keyboard events
main.setAttribute('tabindex', '0')

// Only set focus on main when no form element is focused
const shouldFocusMain = () => {
    const activeElement = document.activeElement;
    const isFormElement = activeElement.tagName === 'INPUT' || 
                         activeElement.tagName === 'TEXTAREA' || 
                         activeElement.tagName === 'SELECT' ||
                         activeElement.contentEditable === 'true' ||
                         activeElement.isContentEditable;
    
    return !isFormElement;
};

main.addEventListener('focus', () => {
    // Focus is already handled by tabindex
})

main.addEventListener('blur', (event) => {
    // Only refocus main if the new focus target is not a form element
    // and if we're not switching to another form element
    setTimeout(() => {
        if (shouldFocusMain()) {
            main.focus();
        }
    }, 10);
})

// Set initial focus on main element when page loads
document.addEventListener('DOMContentLoaded', () => {
    main.focus()
})

// Also set focus when window gains focus, but only if no form is focused
window.addEventListener('focus', () => {
    if (shouldFocusMain()) {
        main.focus()
    }
})