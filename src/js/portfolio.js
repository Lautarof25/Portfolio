const portfolioInfo = {
  "info": [
    {
      "title": "CV Online",
      "description": "Armado de pc y reciclado de hardware",
      "languages": ["fa-brands fa-square-js", "fa-brands fa-htlm5", "fa-brands fa-css3"],
      "thumbnail": "../src/img/cv_online.jpeg",
      "github": "https://github.com/Lautarof25/cv_online",
      "webpage": "https://lautarof25.github.io/cv_online/"
    },
    {
      "title": "WineStore",
      "description": "Armado de pc y reciclado de hardware",
      "languages": ["fa-brands fa-square-js", "fa-brands fa-htlm5", "fa-brands fa-css3"],
      "thumbnail": "./src/img/cv_online.jpg",
      "github": "https://github.com/Lautarof25/cv_online",
      "webpage": "https://lautarof25.github.io/cv_online/"
    },
    {
      "title": "Guess The Number",
      "description": "Armado de pc y reciclado de hardware",
      "languages": ["fa-brands fa-square-js", "fa-brands fa-htlm5", "fa-brands fa-css3"],
      "thumbnail": "./src/img/cv_online.jpg",
      "github": "https://github.com/Lautarof25/cv_online",
      "webpage": "https://lautarof25.github.io/cv_online/"
    },
  ]
}

const portfolio = document.querySelector('.portfolio');

const databasePortfolio = portfolioInfo.info

function addCardPortfolioInfo() {
    databasePortfolio.forEach(item => {
        createCardPortfolioInfo(item.title, item.description,item.languages,item.thumbnail, item.github, item.webpage,item.webpageUrl)
    })
}

{/* 
<div class="section__box mw-500 relative p-05 m-0-auto">
  <div class="bg-principal-color absolute w-50px h-50px top-0 right-0 border-radius-5">
    <div class="bg-black absolute w-100 h-100 topOffset rightOffset border-radius-5"></div>
  </div>
  <div class="bg-principal-color absolute w-50px h-50px top-0 left-0 border-radius-5">
    <div class="bg-black absolute w-100 h-100 topOffset leftOffset border-radius-5"></div>
  </div>
  <div class="bg-principal-color absolute w-50px h-50px left-0 bottom-0 border-radius-5">
    <div class="bg-black absolute w-100 h-100 bottomOffset leftOffset border-radius-5"></div>
  </div>
  <div class="bg-principal-color absolute w-50px h-50px right-0 bottom-0 border-radius-5">
    <div class="bg-black absolute w-100 h-100 bottomOffset rightOffset border-radius-5"></div>
  </div>
  <div class="relative">
    <img style="max-width:380px" src="https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg" alt="">
    <h2 class="text-center"><span class="principalColor">CV Online</span></h2>
    <p class="section__description">Soy un entusiasta tecnológico. Me apasiona el desarrollo web, la programación y
    las computadoras</p>
  </div>
  <div class="d-flex justify-center gap-05">
    <a class="section__button zindex-5 p-1 relative border-radius-5" target="_blank">GitHub<a/>
    <a class="section__button zindex-5 p-1 relative border-radius-5" target="_blank">WebPage</a>
  </div>
</div> */}

function createCardPortfolioInfo(title, description,languages, thumbnail, github, webpage) {
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
  divContainerText.setAttribute("class", "relative")
  const h2 = document.createElement("h2")
  h2.setAttribute("class", "text-center")
  const h2Text = document.createTextNode(`${title}`)
  h2.appendChild(h2Text)
  const img = document.createElement("img")
  img.setAttribute("src",`${thumbnail}`)
  img.setAttribute("alt",`${title}`)
  img.setAttribute("class","w-100")

  const p = document.createElement("p")
  p.setAttribute("class", "section__description text-center")
  const pText = document.createTextNode(`${description}`)
  p.appendChild(pText)
  divContainerText.append(img,h2,p)

  const divLinks = document.createElement("div")
  divLinks.setAttribute("class", "d-flex justify-center gap-05")
  const aGitHub = document.createElement("a")
  const gitHubText = document.createTextNode("GitHub")
  aGitHub.appendChild(gitHubText)
  aGitHub.setAttribute("class", "section__button zindex-5 p-1 relative border-radius-5")
  aGitHub.setAttribute("href", `${github}`)
  aGitHub.setAttribute("target", `_blank`)
  const aWebPage = document.createElement("a")
  const webPageText = document.createTextNode("WebPage")
  aWebPage.appendChild(webPageText)
  aWebPage.setAttribute("class", "section__button zindex-5 p-1 relative border-radius-5")
  aWebPage.setAttribute("href",`${webpage}`)
  aWebPage.setAttribute("target", `_blank`)
  divLinks.append(aGitHub,aWebPage)

  div.append(divRightTop,divRightBottom, divLeftTop,divLeftBottom, divContainerText,divLinks)
  portfolio.appendChild(div)
}

addCardPortfolioInfo()