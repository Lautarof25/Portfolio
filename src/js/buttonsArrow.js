const buttonDown = document.querySelectorAll('.fa-chevron-down');
const buttonUp = document.querySelectorAll('.fa-chevron-up');

// Todo: Cómo hacerlo?
buttonDown.forEach(button => {
    button.addEventListener("click", function () {
        console.log(document.querySelector(".link-active").textContent);
    })
})
buttonUp.forEach(button => {
    button.addEventListener("click", function () {
        console.log(document.querySelector(".link-active").textContent);
    })
})