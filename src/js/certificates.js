function addCardCertificatesInfo() {
  databaseCertificates.forEach(item => {
    createCardCertificatesInfo(item.title, item.description, item.thumbnail, item.hours, item.year, item.link)
  })
}

function createCardCertificatesInfo(title, description, thumbnail, hours, year, link) {
  const div = document.createElement("div")
  div.setAttribute("class", "section__box mw-500 relative d-grid p-05 m-0-auto w-100 bg-dark-gray text-center")

  const chevronBottomRight = createSVG("chevron-bottom-right");
  const chevronBottomLeft = createSVG("chevron-bottom-left");
  const chevronTopRight = createSVG("chevron-top-right");
  const chevronTopLeft = createSVG("chevron-top-left");

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
  img.setAttribute("loading", "lazy")
  img.setAttribute("alt", `${title}`)
  img.setAttribute("class", "w-250px h-250px object-cover")
  aLinkImg.appendChild(img)

  div.append(chevronTopRight, chevronTopLeft, chevronBottomLeft, chevronBottomRight, h2, p, pHours, pYear, aLinkImg, aLink)
  certificates.appendChild(div)
}

addCardCertificatesInfo()