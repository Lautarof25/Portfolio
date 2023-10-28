const portfolioInfo = {
  "info": [
    {
      "title": "CV Online",
      "description": "Cv online dinámico",
      "languages": [ "fa-html5","fa-css3","fa-square-js"],
      "thumbnail": ["cv_online.webp","cv_online_dark.webp"],
      "github": "https://github.com/Lautarof25/cv_online",
      "webpage": "https://lautarof25.github.io/cv_online/"
    },
    {
      "title": "WineStore",
      "description": "Una vineria con carrito de compras",
      "languages": [ "fa-html5","fa-bootstrap ", "fa-square-js"],
      "thumbnail": ["winestore.webp","winestore_sesion.webp","winestore_newsletter.webp"],
      "github": "https://github.com/Lautarof25/Vinoteca",
      "webpage": "https://lautarof25.github.io/Vinoteca/"
    },
    {
      "title": "Guess The Number",
      "description": "Un juego para usar la lógica",
      "languages": [ "fa-html5"," fa-bootstrap", "fa-square-js"],
      "thumbnail": ["guess_the_number.webp","guess_the_number_2.webp","guess_the_number_3.webp"],
      "github": "https://github.com/Lautarof25/guessTheNumber",
      "webpage": "https://lautarof25.github.io/guessTheNumber/"
    },
  ]
}

const portfolio = document.querySelector('.portfolio');

const databasePortfolio = portfolioInfo.info

function addCardPortfolioInfo() {
    databasePortfolio.forEach(item => {
        createCardPortfolioInfo(item.title, item.description,item.languages,item.thumbnail, item.github, item.webpage,item.webpage)
    })
}

function createCardPortfolioInfo(title, description,languages, thumbnail, github, webpage) {
  const div = document.createElement("div")
  div.setAttribute("class", "section__box mw-500 relative p-05 m-0-auto")

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
  divContainerText.setAttribute("class", "relative")
  const h2 = document.createElement("h2")
  h2.setAttribute("class", "text-center")
  const h2Text = document.createTextNode(`${title}`)
  h2.appendChild(h2Text)
  const divImg = document.createElement("a")
  divImg.setAttribute("href",webpage)
  divImg.setAttribute("target","_blank")
  divImg.setAttribute("class", "relative")
  const img = document.createElement("img")
  img.setAttribute("src",`./src/img/portfolio/${thumbnail[0]}`)
  img.setAttribute("alt",`${title}`)
  img.setAttribute("class","w-100 border-radius-5")
  const divGradient = document.createElement("div")
  divGradient.setAttribute("class","gradientTransparent d-flex justify-center align-end w-100 h-50px zindex-5 absolute bottom-0 gap-05")
  divImg.append(img,divGradient)
  

  const p = document.createElement("p")
  p.setAttribute("class", "section__description text-center")
  const pText = document.createTextNode(`${description}`)
  p.appendChild(pText)
  divContainerText.append(divImg,h2,p)

  const divIcons = document.createElement("div")
  divIcons.setAttribute("class", "section__icons d-flex justify-center  gap-05")

  for (let i = 0; i < languages.length; i++) {
      const icon = document.createElement("i")
      icon.setAttribute("class", `fa-brands ${languages[i]} fa-2xl`)
      divGradient.appendChild(icon)
  }

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

  div.append(divRightTop,divRightBottom, divLeftTop,divLeftBottom, divContainerText,divIcons,divLinks)
  portfolio.appendChild(div)
}

addCardPortfolioInfo()