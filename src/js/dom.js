const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
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
let copy = $(".logos-slide").cloneNode(true);
$(".logos").appendChild(copy);