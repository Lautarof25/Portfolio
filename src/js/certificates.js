function createCardCertificatesInfo(title, description, thumbnail, hours, year, link) {
  const div = document.createElement("div")
  div.setAttribute("class", "section__box relative d-grid bg-dark-gray text-center")

  const chevronTopLeft = createSVG("chevron-top-left")
  const chevronTopRight = createSVG("chevron-top-right")

  const h2 = document.createElement("h2")
  h2.setAttribute("class", "m-0")
  const h2Text = document.createTextNode(title)
  h2.appendChild(h2Text)
  const p = document.createElement("p")
  const pText = document.createTextNode(description)
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
  aLink.setAttribute("href", link)
  aLink.setAttribute("target", "_blanket")
  aLink.setAttribute("class", "section__button w-100 text-center m-0-auto")
  const aLinkImg = document.createElement("a")
  aLinkImg.setAttribute("href", link)
  aLinkImg.setAttribute("target", "_blanket")
  aLinkImg.setAttribute("class", "p-0")
  const img = document.createElement("img")
  img.setAttribute("src", `https://ucarecdn.com/${thumbnail}/-/scale_crop/500x250/-/format/auto/-/quality/smart/`)
  img.setAttribute("loading", "lazy")
  img.setAttribute("alt", title)
  img.setAttribute("class", "w-100 h-250px object-fit-cover object-pos-center-top border-radius-top-5")
  aLinkImg.appendChild(img)

  div.append(chevronTopLeft,chevronTopRight)
  div.append(h2,p,pHours,pYear,aLinkImg,aLink)
  certificates.appendChild(div)
}