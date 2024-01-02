aside.addEventListener("mouseover", function () {
    if (window.innerWidth <= 576) {
        aside.classList.add("show-aside")
        allExceptAside.forEach(element => {
            element.classList.add("blur-effect")
        });
    }

})
aside.addEventListener("mouseout", function () {
    if (window.innerWidth <= 576) {
        aside.classList.remove("show-aside")
        allExceptAside.forEach(element => {
            element.classList.remove("blur-effect")
        });
    }
})

links.forEach(link => {
    link.addEventListener("click", function () {
        if (window.innerWidth <= 576) {
            aside.classList.remove("show-aside")
            allExceptShareButton.forEach(element => {
                element.style.filter = "blur(0)"
            });
        }
        allExceptAside.forEach(element => {
            element.classList.remove("blur-effect")
        });
    })
})