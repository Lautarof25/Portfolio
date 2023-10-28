const buttonDown = document.querySelector('.fa-chevron-down');
const buttonUp = document.querySelector('.fa-chevron-up');

buttonDown.addEventListener('click', () => navigatePage(1));
buttonUp.addEventListener('click', () => navigatePage(-1));

function navigatePage(direction) {
    hidePages();
    const index = direction === 1 ? nextPage() : prevPage();
    const currentId = linksArray[index];
    showPage(currentId);
    removeAllClassesLinkActive();
    document.getElementById(currentId).classList.add('link-active');
    changeTitle();
}

function nextPage() {
    return currentIndexPage() !== 5 ? currentIndexPage() + 1 : 0
}

function prevPage() {
    return currentIndexPage() !== 0 ? currentIndexPage() - 1 : 5
}

function currentIndexPage() {
    return linksArray.indexOf(currentIdPage())
}

function currentIdPage() {
    return document.querySelector(".link-active").id
}