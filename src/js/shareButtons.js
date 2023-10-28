const shareButtons = document.querySelector(".shareButtons")
const closeButton = document.querySelector(".closeButton")

let countClicks = 0

addEventListener('click',function(){
    countClicks++
    if(countClicks === 5){
        header.classList.add('blur-effect')
        nav.classList.add('blur-effect')
        footer.classList.add('blur-effect')
        main.classList.add('blur-effect')
        shareButtons.classList.remove("hidden")
    }
})

closeButton.addEventListener('click',function(){
    shareButtons.classList.add('hidden')
    header.classList.remove('blur-effect')
    nav.classList.remove('blur-effect')
    footer.classList.remove('blur-effect')
    main.classList.remove('blur-effect')
});