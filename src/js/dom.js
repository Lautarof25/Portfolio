const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// Semantic containers
const body = $("body")
const header = $("header")
const nav = $("nav")
const about = $('.about')
const section = $("section")
const aside = $("aside")
const sectionTitlePage = $(".titlePage")
const main = $("main")
const home = $('.home')
const services = $('.services')
const projects = $('.projects')
const certificates = $('.certificates')
const footer = $("footer")
const allExceptShareButton = $$('body > *:not(.share-buttons)')
const allExceptAside = $$('body > *:not(aside)')
// Form
const name = $("#name")
const email = $("#email")
const message = $("#message")
// Navigation arrows
const buttonsNavigation = $$('.titlePage button')
const buttonUp = $('[aria-label="Previous page"]')
const buttonDown = $('[aria-label="Next page"]')
// Menu Bar
const toggleMenu = $("#toggle-menu")
const navIcons = $$(".nav img")
const faBars = $('[viewBox="0 0 448 512"]')
const links = $$('.nav a[href="#"]')
const headerLogo = $('.header__logo')
const chevronBottomRight = $('header svg.chevron-bottom-right')
const hideMenuDesktop = $("#hideMenuDesktop")
// Components 
const bgDisabled = $(".bgDisabled")
const titlePage = $('.titlePage h2')
const colorPicker = $('.color-picker')
const logo = $("#logo")
const demoMode = $('.demoMode')
const footerIcons = $$(".footer a")
const shareButtons = $$(".share-button")
const share = $(".share")
const containerShareButtons = $(".share-buttons")
const closeButton = $(".closeButton")
const radios = $$('[type="radio"]')
const allLinks = $$("a")
const allButtons = $$("button")
const freeColor = $("#freeColor")

let words = ['Lautaro', 'Exequiel', 'Fernández']
let index = 0
let currentLetter = words[0].length
let direction = -1
const speedWriting = 250
let speedChangeWords = 1000

const nameAnimationEnabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
let activeWriteWords = nameAnimationEnabled
let typewriterTimer

// Cachear elemento una sola vez fuera de la función
const nameChangeElement = $('.nameChange')

function scheduleWriteDeleteWords(delay) {
    clearTimeout(typewriterTimer)
    typewriterTimer = setTimeout(writeDeleteWords, delay)
}

function writeDeleteWords() {
    if (!nameChangeElement || !activeWriteWords) return
    
    let currentWord = words[index]
    if (direction === 1) {
        nameChangeElement.textContent = currentWord.substring(0, currentLetter)
        currentLetter++
        if (currentLetter > currentWord.length) {
            direction = -1
            scheduleWriteDeleteWords(speedChangeWords)
        } else {
            scheduleWriteDeleteWords(speedWriting)
        }
    } else {
        nameChangeElement.textContent = currentWord.substring(0, currentLetter)
        currentLetter--
        if (currentLetter === 0) {
            direction = 1
            index = (index + 1) % words.length
            scheduleWriteDeleteWords(speedChangeWords)
        } else {
            scheduleWriteDeleteWords(speedWriting / 2)
        }
    }
}

if (activeWriteWords) scheduleWriteDeleteWords(1200)

const observer = new MutationObserver(() => {
    const currentPage = currentIdPage()
    if (currentPage === "home" && nameAnimationEnabled && !activeWriteWords) {
        activeWriteWords = true
        scheduleWriteDeleteWords(0)
    } else if (currentPage !== "home" && activeWriteWords) {
        activeWriteWords = false
        speedChangeWords = 2000
        clearTimeout(typewriterTimer)
    }
    if (currentPage === "contact") automaticForm()
})

observer.observe(home, { attributes: true })

document.getElementById("downloadCV").addEventListener("click", async (e) => {
    e.preventDefault();
    const res = await fetch(e.currentTarget.href);
    if (!res.ok) {
        throw new Error(`No se pudo descargar el CV: ${res.status}`);
    }
    const blob = await res.blob();
    const now = new Date();
    const fecha = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}_${String(now.getHours()).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cv_fernandez_lautaro_${fecha}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
});

console.log('%c¡Bienvenidos a mi Portafolio!😊', 'background: #222; color: #ff5b02; font-size: 24px; padding: 4px; border-radius: 5px;');
