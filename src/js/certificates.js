const certificatesInfo = {
    "info": [
      {
        "title": "FreeCodeCamp",
        "description": "Responsive web design",
        "thumbnail": "../src/img/freeCodeCamp.jpg",
        "link": "https://freecodecamp.org/certification/lautarof/responsive-web-design",
      },
      {
        "title": "Google Activate",
        "description": "Introducción al desarrollo web II",
        "thumbnail": "../src/img/google_activate.jpg",
        "link": "https://learndigital.withgoogle.com/link/1nur091p2ww",
      },
      {
        "title": "Cisco",
        "description": "JavaScritp Essentially 1",
        "thumbnail": "../src/img/cisco.jpg",
        "link": "https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l",
      },
    ]
  }

  /*
  <div class="section__box relative p-05">
        <div class="bg-principal-color absolute w-50px h-50px top-0 right-0 border-radius-5">
          <div class="bg-black absolute w-100 h-100 topOffset rightOffset border-radius-5"></div>
        </div>

        <div class="bg-principal-color absolute w-50px h-50px zindex-1 left-0 bottom-0 border-radius-5">
          <div class="bg-black absolute w-100 h-100 bottomOffset leftOffset border-radius-5"></div>
        </div>

        <div class="bg-principal-color absolute w-50px h-50px top-0 left-0 border-radius-5">
          <div class="bg-black absolute w-100 h-100 topOffset leftOffset border-radius-5"></div>
        </div>

        <div class="bg-principal-color absolute w-50px h-50px zindex-1 right-0 bottom-0 border-radius-5">
          <div class="bg-black absolute w-100 h-100 bottomOffset rightOffset border-radius-5"></div>
        </div>

        <div class="relative zindex-1 d-flex flex-column align-center">
          <h2>Cisco</h2>
          <p>JavaScript Essentials 1</p>
          <a href="https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l"
            target="_blank">Link</a>
          <a href="https://www.credly.com/badges/85c38784-390e-4e55-8dcc-94e447fd32b0/linked_in?t=s0151l"
            target="_blank"><img class="w-100" src="./src/img/cisco.jpg" alt="cisco"></a>
        </div>
      </div>
  */
  
  const certificates = document.querySelector('.certificates');
  
  const databaseCertificates = certificatesInfo.info
  
  function addCardCertificatesInfo() {
      databaseCertificates.forEach(item => {
          createCardCertificatesInfo(item.title, item.description,item.thumbnail, item.link)
      })
  }
  
  function createCardCertificatesInfo(title, description, thumbnail, link) {
    const div = document.createElement("div")
    div.setAttribute("class", "section__box mw-500 relative p-05 m-0-auto")
  
    const divLeftTop = document.createElement("div")
    divLeftTop.setAttribute("class", "bg-principal-color absolute w-50px h-50px top-0 left-0 border-radius-5")
    const divLeftTopOffset = document.createElement("div")
    divLeftTopOffset.setAttribute("class", "bg-black absolute w-100 h-100 topOffset leftOffset border-radius-5")
    divLeftTop.appendChild(divLeftTopOffset)
  
    const divLeftBottom = document.createElement("div")
    divLeftBottom.setAttribute("class", "bg-principal-color absolute w-50px h-50px bottom-0 left-0 border-radius-5")
    const divLeftBottomOffset = document.createElement("div")
    divLeftBottomOffset.setAttribute("class", "bg-black absolute w-100 h-100 bottomOffset leftOffset border-radius-5")
    divLeftBottom.appendChild(divLeftBottomOffset)
  
    const divRightBottom = document.createElement("div")
    divRightBottom.setAttribute("class", "bg-principal-color absolute w-50px h-50px right-0 bottom-0 border-radius-5")
    const divRightBottomOffset = document.createElement("div")
    divRightBottomOffset.setAttribute("class", "bg-black absolute w-100 h-100 bottomOffset rightOffset border-radius-5")
    divRightBottom.appendChild(divRightBottomOffset)
  
    const divRightTop = document.createElement("div")
    divRightTop.setAttribute("class", "bg-principal-color absolute w-50px h-50px right-0 top-0 border-radius-5")
    const divRightTopOffset = document.createElement("div")
    divRightTopOffset.setAttribute("class", "bg-black absolute w-100 h-100 topOffset rightOffset border-radius-5")
    divRightTop.appendChild(divRightTopOffset)
  
    const divContainerText = document.createElement("div")
    divContainerText.setAttribute("class", "relative zindex-1 d-flex flex-column align-center")
    const h2 = document.createElement("h2")
    const h2Text = document.createTextNode(`${title}`)
    h2.appendChild(h2Text)
    const p = document.createElement("p")
    const pText = document.createTextNode(`${description}`)
    p.appendChild(pText)
    const aLink = document.createElement("a")
    const aLinkText = document.createTextNode("Link")
    aLink.appendChild(aLinkText)
    aLink.setAttribute("href", `${link}`)
    aLink.setAttribute("class", "section__button p-1 border-radius-5 m-0-auto")
    const aLinkImg = document.createElement("a")
    aLinkImg.setAttribute("href", `${link}`)
    const img = document.createElement("img")
    img.setAttribute("src",`${thumbnail}`)
    img.setAttribute("alt",`${title}`)
    img.setAttribute("class","w-100")
    aLinkImg.appendChild(img)
    divContainerText.append(h2,p,aLink,aLinkImg)
  
    div.append(divRightTop,divRightBottom, divLeftTop,divLeftBottom, divContainerText)
    certificates.appendChild(div)
  }
  
  addCardCertificatesInfo()