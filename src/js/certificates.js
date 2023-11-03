const certificatesInfo = {
  "info": [
    {
      "title": "Cisco",
      "description": "JavaScript Essentially 1",
      "thumbnail": "cisco.webp",
      "hours": 40,
      "year": 2023,
      "link": "https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l",
    },
    {
      "title": "FreeCodeCamp",
      "description": "Responsive web design",
      "thumbnail": "freeCodeCamp.webp",
      "hours": 300,
      "year": 2022,
      "link": "https://freecodecamp.org/certification/lautarof/responsive-web-design",
    },
    {
      "title": "Academia QA",
      "description": "Testing de software Básico",
      "thumbnail": "academia_qa_testing.webp",
      "hours": 20,
      "year": 2022,
      "link": "https://academiaqa.com/Certificado/9ea932d7a7265fedc49ddb5ae172cdf7/?swcfpc=1",
    },
    {
      "title": "Google Activate",
      "description": "Introducción al desarrollo web II",
      "thumbnail": "google_activate.webp",
      "hours": 40,
      "year": 2021,
      "link": "https://learndigital.withgoogle.com/link/1nur091p2ww",
    },
    {
      "title": "Ratatype",
      "description": "Test Typing Speed",
      "thumbnail": "ratatype.webp",
      "hours": 0.01,
      "year": 2023,
      "link": "https://www.ratatype.com/certificates/en/es/9/3/2/5476932.webp?1698844110",
    },
    {
      "title": "EF Set",
      "description": "English Test",
      "thumbnail": "ef_test_english.webp",
      "hours": 1,
      "year": 2023,
      "link": "https://www.efset.org/cert/KDPqio",
    },
  ]
}

const certificates = document.querySelector('.certificates');

const databaseCertificates = certificatesInfo.info

function addCardCertificatesInfo() {
  databaseCertificates.forEach(item => {
    createCardCertificatesInfo(item.title, item.description, item.thumbnail, item.hours,item.year, item.link)
  })
}

function createCardCertificatesInfo(title, description, thumbnail, hours, year, link) {
  const div = document.createElement("div")
  div.setAttribute("class", "section__box mw-500 relative p-05 m-0-auto w-100") 

  const chevronBottomRight = createSVG("chevron-bottom-right");
  const chevronBottomLeft = createSVG("chevron-bottom-left");
  const chevronTopRight = createSVG("chevron-top-right");
  const chevronTopLeft = createSVG("chevron-top-left");


  const divContainer = document.createElement("div")
  divContainer.setAttribute("class", "relative zindex-1 d-flex flex-column align-center gap-05")
  const h2 = document.createElement("h2")
  h2.setAttribute("class", "m-0")
  const h2Text = document.createTextNode(`${title}`)
  h2.appendChild(h2Text)
  const p = document.createElement("p")
  const pText = document.createTextNode(`${description}`)
  p.appendChild(pText)
  p.setAttribute("class", "mt-0")
  const pHours = document.createElement("p")
  const pHoursText = document.createTextNode(`Horas: ${hours}`)
  pHours.appendChild(pHoursText)
  pHours.setAttribute("class", "m-0")
  const pYear = document.createElement("p")
  const pYearText = document.createTextNode(`Año: ${year}`)
  pYear.appendChild(pYearText)
  pYear.setAttribute("class", "m-0")

  const divLinks = document.createElement("div")
  divLinks.setAttribute("class", "d-flex flex-column")
  const aLink = document.createElement("a")
  const aLinkText = document.createTextNode("Link")
  aLink.appendChild(aLinkText)
  aLink.setAttribute("href", `${link}`)
  aLink.setAttribute("target", "_blanket")
  aLink.setAttribute("class", "section__button p-1 w-100 plr-0 text-center border-radius-top-5")
  const aLinkImg = document.createElement("a")
  aLinkImg.setAttribute("href", `${link}`)
  aLinkImg.setAttribute("target", "_blanket")
  const img = document.createElement("img")
  img.setAttribute("src", `./src/img/certificates/${thumbnail}`)
  img.setAttribute("alt", `${title}`)
  img.setAttribute("class", "w-250px")
  aLinkImg.appendChild(img)
  divLinks.append(aLink,aLinkImg)
  divContainer.append(h2, p, pHours, pYear, divLinks)

  div.append(chevronTopRight, chevronTopLeft, chevronBottomLeft, chevronBottomRight, divContainer)
  certificates.appendChild(div)
}

addCardCertificatesInfo()