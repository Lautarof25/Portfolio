const hideMenu = () =>{
    allExceptAside.forEach(e => {
        e.addEventListener('click', function () {
            if (aside.classList.contains("show-aside")) {
                aside.classList.remove("show-aside")
                allExceptAside.forEach(element => {
                    element.classList.remove("blur-effect")
                })
            }
        })
    })
}

hideMenu()

const showMenu = () =>{
    toggleMenu.addEventListener("click", function () {
        aside.classList.toggle("show-aside")
        allExceptAside.forEach(element => {
            element.classList.toggle("blur-effect")
        })
    })
}

showMenu()

const hideMenuAfterClick = () =>{
    links.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 576) {
                aside.classList.remove("show-aside")
                allExceptShareButton.forEach(element => {
                    element.classList.remove("blur-effect")
                });
            }
            allExceptAside.forEach(element => {
                element.classList.remove("blur-effect")
            })
        })
    })
}
hideMenuAfterClick()

const hideMenuDestktopAction = () =>{
    hideMenuDesktop.addEventListener("click", ()=>{
        if(window.innerWidth >= 576) {
            body.classList.toggle("removePaddingLeft")
            aside.classList.toggle("hideMenuDesktop")
            colorPicker.classList.toggle("removeMarginLeft")
        }
    })
}
hideMenuDestktopAction()