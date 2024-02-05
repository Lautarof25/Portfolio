const hideMenu = () => {
    allExceptAside.forEach(e => {
        e.addEventListener('click', function () {
            if (aside.classList.contains("show-aside")) {
                aside.classList.remove("show-aside")
                allExceptAside.forEach(element => {
                    element.classList.remove("blur-effect")
                })
                bgDisable(0)
            }
        })
    })
}

const bgDisable = (mode) => {
    mode === 1 ? bgDisabled.classList.remove("hidden") : bgDisabled.classList.add("hidden")
}

hideMenu()

const showMenu = () => {
    toggleMenu.addEventListener("click", function () {
        bgDisable(1)
        aside.classList.toggle("show-aside")
        aside.style.zIndex = "20"
        allExceptAside.forEach(element => {
            element.classList.toggle("blur-effect")
        })
    })
}

showMenu()

const hideMenuAfterClick = () => {
    links.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 576) {
                aside.classList.remove("show-aside")
                allExceptShareButton.forEach(element => {
                    element.classList.remove("blur-effect")
                })
            }
            allExceptAside.forEach(element => {
                element.classList.remove("blur-effect")
            })
            bgDisable(0)
        })
    })
}
hideMenuAfterClick()

const hideMenuDestktopAction = () => {
    hideMenuDesktop.addEventListener("click", () => {
        if (window.innerWidth >= 576) {
            body.classList.toggle("removePaddingLeft")
            aside.classList.toggle("hideMenuDesktop")
            colorPicker.classList.toggle("removeMarginLeft")
        }
    })
}
hideMenuDestktopAction()