// Semantic containers
const body = document.querySelector("body")
const header = document.querySelector("header")
const nav = document.querySelector("nav")
const about = document.querySelector('.about')
const section = document.querySelector("section")
const aside = document.querySelector("aside")
const sectionTitlePage = document.querySelector(".titlePage")
const main = document.querySelector("main")
const services = document.querySelector('.services')
const portfolio = document.querySelector('.portfolio')
const certificates = document.querySelector('.certificates')
const footer = document.querySelector("footer")
const allExceptShareButton = document.querySelectorAll('body > *:not(.share-buttons)')
const allExceptAside = document.querySelectorAll('body > *:not(aside)')
// Database information
const databaseCertificates = certificatesInfo.info
const databaseServices = servicesInfo.info
const databasePortfolio = portfolioInfo.info
const databaseAbout = aboutInfo.info
// Form
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
// Navigation arrows
const buttonsNavigation = document.querySelectorAll('.titlePage button')
const buttonUp = document.querySelector('[aria-label="Previous page"]')
const buttonDown = document.querySelector('[aria-label="Next page"]')
// Menu Bar
const toggleMenu = document.querySelector("#toggle-menu")
const navIcons = document.querySelectorAll(".nav img")
const faBars = document.querySelector('[viewBox="0 0 448 512"]')
const links = document.querySelectorAll('.nav a[href="#"]')
const headerLogo = document.querySelector('.header__logo')
const chevronBottomRight = document.querySelector('header svg.chevron-bottom-right')
// Components 
const titlePage = document.querySelector('.titlePage h2')
const colorPicker = document.querySelector('.color-picker')
const logo = document.querySelector("#logo")
const demoMode = document.querySelector('.demoMode')
const footerIcons = document.querySelectorAll(".footer a")
const shareButtons = document.querySelectorAll(".share-button")
const containerShareButtons = document.querySelector(".share-buttons")
const closeButton = document.querySelector(".closeButton")
const radios = document.querySelectorAll('[type="radio"]')
const allLinks = document.querySelectorAll("a")
const allButtons = document.querySelectorAll("button")
titlePage.textContent = document.querySelector('.link-active').textContent
const fechaActual = new Date()
const añoActual = fechaActual.getFullYear()
const currentYear = document.querySelector('.currentYear').textContent += fechaActual.getFullYear()