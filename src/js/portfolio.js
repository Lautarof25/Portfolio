const portfolioInfo = {
  "info": [
    {
      "title": "CV Online",
      "description": "Cv online dinámico",
      "languages": [ "html5","css3-alt","square-js"],
      "thumbnail": ["cv_online.webp","cv_online_dark.webp"],
      "github": "https://github.com/Lautarof25/cv_online",
      "webpage": "https://lautarof25.github.io/cv_online/"
    },
    {
      "title": "Calculadora Python",
      "description": "Una simple calculadora creada con Python",
      "languages": [ "python"],
      "thumbnail": ["calculadora_python.webp"],
      "github": "https://github.com/Lautarof25/practicas_python",
      "webpage": "https://onlinegdb.com/qZjq7lwwj"
    },
    {
      "title": "WineStore",
      "description": "Una vineria con carrito de compras",
      "languages": [ "html5","bootstrap","square-js"],
      "thumbnail": ["winestore.webp","winestore_sesion.webp","winestore_newsletter.webp"],
      "github": "https://github.com/Lautarof25/Vinoteca",
      "webpage": "https://lautarof25.github.io/Vinoteca/"
    },
    {
      "title": "Guess The Number",
      "description": "Un juego para usar la lógica",
      "languages": [ "html5","bootstrap","square-js"],
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
  div.setAttribute("class", "section__box relative p-05 m-0-auto d-grid")

  const chevronBottomRight = createSVG("chevron-bottom-right");
  const chevronBottomLeft = createSVG("chevron-bottom-left");
  const chevronTopRight = createSVG("chevron-top-right");
  const chevronTopLeft = createSVG("chevron-top-left");

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
  img.setAttribute("loading","lazy")
  img.setAttribute("alt",`${title}`)
  img.setAttribute("class","w-100 h-250 border-radius-5 object-cover")
  const divGradient = document.createElement("div")
  divGradient.setAttribute("class","gradientTransparent d-flex justify-center align-end w-100 h-50px zindex-5 absolute bottom-0 gap-05")
  divImg.append(img,divGradient)
  

  const p = document.createElement("p")
  p.setAttribute("class", "section__description text-center")
  const pText = document.createTextNode(`${description}`)
  p.appendChild(pText)
  divContainerText.append(divImg,h2,p)


  for (let i = 0; i < languages.length; i++) {
      const icon = document.createElement("img")
      icon.setAttribute("src", `./src/img/icons/${languages[i]}.svg`)
      icon.setAttribute("class", `icon-language`)
      divGradient.appendChild(icon)
  }

  const aGitHub = document.createElement("a")
  const gitHubText = document.createTextNode("GitHub")
  aGitHub.appendChild(gitHubText)
  aGitHub.setAttribute("class", "section__button zindex-5 relative border-radius-5 w-100 text-center")
  aGitHub.setAttribute("href", `${github}`)
  aGitHub.setAttribute("target", `_blank`)
  const aWebPage = document.createElement("a")
  const webPageText = document.createTextNode("WebPage")
  aWebPage.appendChild(webPageText)
  aWebPage.setAttribute("class", "section__button zindex-5 relative border-radius-5 w-100 text-center")
  aWebPage.setAttribute("href",`${webpage}`)
  aWebPage.setAttribute("target", `_blank`)

  div.append(chevronTopLeft,chevronTopRight,chevronBottomRight,chevronBottomLeft , divContainerText,aGitHub,aWebPage)
  portfolio.appendChild(div)
}

addCardPortfolioInfo()