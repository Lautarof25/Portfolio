const buttonUp = document.querySelector('[src="./src/img/icons/chevron-up-solid.svg"]');
const buttonDown = document.querySelector('[src="./src/img/icons/chevron-down-solid.svg"]');

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