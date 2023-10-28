const certificatesInfo = {
  "info": [
    {
      "title": "Cisco",
      "description": "JavaScritp Essentially 1",
      "thumbnail": "cisco.webp",
      "hours": 40,
      "link": "https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l",
    },
    {
      "title": "FreeCodeCamp",
      "description": "Responsive web design",
      "thumbnail": "freeCodeCamp.webp",
      "hours": 300,
      "link": "https://freecodecamp.org/certification/lautarof/responsive-web-design",
    },
    {
      "title": "Google Activate",
      "description": "Introducción al desarrollo web II",
      "thumbnail": "google_activate.webp",
      "hours": 40,
      "link": "https://learndigital.withgoogle.com/link/1nur091p2ww",
    },
  ]
}

const certificates = document.querySelector('.certificates');

const databaseCertificates = certificatesInfo.info

function addCardCertificatesInfo() {
  databaseCertificates.forEach(item => {
    createCardCertificatesInfo(item.title, item.description, item.thumbnail,item.hours, item.link)
  })
}

function createCardCertificatesInfo(title, description, thumbnail,hours, link) {
  const div = document.createElement("div")
  div.setAttribute("class", "section__box mw-500 relative p-05 m-0-auto w-100")

  function createDivWithClasses(classes) {
    const div = document.createElement("div");
    div.setAttribute("class", classes);
    return div;
  }
  
  function createDivWithOffsetClasses(mainClasses, offsetClasses) {
    const div = createDivWithClasses(mainClasses);
    const offsetDiv = createDivWithClasses(offsetClasses);
    div.appendChild(offsetDiv);
    return div;
  }
  
  const divLeftTop = createDivWithOffsetClasses(
    "bg-principal-color absolute w-50px h-50px top-0 left-0 border-radius-5",
    "bg-black absolute w-100 h-100 topOffset leftOffset border-radius-5"
  );
  
  const divLeftBottom = createDivWithOffsetClasses(
    "bg-principal-color absolute w-50px h-50px bottom-0 left-0 border-radius-5",
    "bg-black absolute w-100 h-100 bottomOffset leftOffset border-radius-5"
  );
  
  const divRightBottom = createDivWithOffsetClasses(
    "bg-principal-color absolute w-50px h-50px right-0 bottom-0 border-radius-5",
    "bg-black absolute w-100 h-100 bottomOffset rightOffset border-radius-5"
  );
  
  const divRightTop = createDivWithOffsetClasses(
    "bg-principal-color absolute w-50px h-50px right-0 top-0 border-radius-5",
    "bg-black absolute w-100 h-100 topOffset rightOffset border-radius-5"
  );
  

  const divContainerText = document.createElement("div")
  divContainerText.setAttribute("class", "relative zindex-1 d-flex flex-column align-center gap-05")
  const h2 = document.createElement("h2")
  h2.setAttribute("class", "m-0")
  const h2Text = document.createTextNode(`${title}`)
  h2.appendChild(h2Text)
  const p = document.createElement("p")
  const pText = document.createTextNode(`${description}`)
  p.appendChild(pText)
  const pHours = document.createElement("p")
  const phoursText = document.createTextNode(`Horas: ${hours}`)
  pHours.appendChild(phoursText)
  pHours.setAttribute("class", "m-0")
  const aLink = document.createElement("a")
  const aLinkText = document.createTextNode("Link")
  aLink.appendChild(aLinkText)
  aLink.setAttribute("href", `${link}`)
  aLink.setAttribute("target", "_blanket")
  aLink.setAttribute("class", "section__button p-1 border-radius-5 m-0-auto")
  const aLinkImg = document.createElement("a")
  aLinkImg.setAttribute("href", `${link}`)
  aLinkImg.setAttribute("target", "_blanket")
  const img = document.createElement("img")
  img.setAttribute("src", `./src/img/certificates/${thumbnail}`)
  img.setAttribute("alt", `${title}`)
  img.setAttribute("class", "w-100")
  aLinkImg.appendChild(img)
  divContainerText.append(h2, p,pHours, aLink, aLinkImg)

  div.append(divRightTop, divRightBottom, divLeftTop, divLeftBottom, divContainerText)
  certificates.appendChild(div)
}

addCardCertificatesInfo()