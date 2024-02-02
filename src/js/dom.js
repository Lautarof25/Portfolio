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
const services = $('.services')
const portfolio = $('.portfolio')
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
titlePage.textContent = $('.link-active').textContent
const fechaActual = new Date()
const añoActual = fechaActual.getFullYear()
const currentYear = $('.currentYear').textContent += fechaActual.getFullYear()
let copy = $(".logos-slide").cloneNode(true)
$(".logos").appendChild(copy)

let words = ['Lautaro', 'Exequiel', 'Fernández']
let index = 0
let currentLetter = 0
let direction = 1
let speedWriting = 150 // milisegundos por letra
let speedChangeWords = 1000 // milisegundos entre cambios de palabra

let activeWriteWords = true

function writeDeleteWords() {
    let currentWord = words[index]
    let element = $('.nameChange')
    if(activeWriteWords){
        if (direction === 1) {
            element.textContent = currentWord.substring(0, currentLetter)
            currentLetter++
            if (currentLetter > currentWord.length) {
                direction = -1
                setTimeout(writeDeleteWords, speedChangeWords)
            } else {
                setTimeout(writeDeleteWords, speedWriting)
            }
        } else {
            element.textContent = currentWord.substring(0, currentLetter)
            currentLetter--
            if (currentLetter === 0) {
                direction = 1
                index = (index + 1) % words.length
                setTimeout(writeDeleteWords, speedChangeWords)
            } else {
                setTimeout(writeDeleteWords, speedWriting / 2)
            }
        }
    }
}

writeDeleteWords()

const targetElement = document.querySelector('.home')

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (currentIdPage() === "home") {
            activeWriteWords = true
            writeDeleteWords()
        }else {
            activeWriteWords = false
        }
        if(currentIdPage() === "contact")
            automaticForm()
    }
})

observer.observe(targetElement, { attributes: true });