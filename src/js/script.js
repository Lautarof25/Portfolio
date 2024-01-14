function activityUser() {
    var scripts = ["cardsInfo", "chevronCorner", "titlePage", "about", "services", "portfolio", "certificates", "dynamicCards", "linksSelector", "form", "showPage", "demoMode", "shareButtons", "colorPicker", "navigation", "scrollNavigation", "menuMobile"]

    scripts.forEach(script => {
        var s = document.createElement("script")
        s.src = `./src/js/${script}.js`
        document.head.appendChild(s)
    })
    document.removeEventListener("keydown", activityUser)
    document.removeEventListener("click", activityUser)
    document.removeEventListener("mousemove", activityUser)
}
document.addEventListener("mousemove", activityUser, { once: true })
document.addEventListener("keydown", activityUser, { once: true })
document.addEventListener("click", activityUser, { once: true })