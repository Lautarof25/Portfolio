const aboutInfo = {
  "info": [
    {
      "description": "Soy técnico en mantenimiento y armado de PC certificado del IAC.",
      "icons": ["fa-solid fa-computer", "fa-solid fa-screwdriver-wrench"]
    },
    {
      "description": "Estudio programación desde mediados del 2020",
      "icons": ["fa-solid fa-pencil", "fa-solid fa-code"]
    },
    {
      "description": "Tengo conocimientos en HTML, CSS, JS y algunos frameworks (Bootstrap y Tailwind)",
      "icons": ["fa-brands fa-html5", "fa-brands fa-css3","fa-brands fa-js","fa-brands fa-bootstrap"]
    },
    {
      "description": "También conozco Python y Java, y estoy estudiando ReactJS, Spring, PHP, entre otros.",
      "icons": ["fa-brands fa-python", "fa-brands fa-java","fa-brands fa-react","fa-brands fa-php"]
    },
    {
      "description": "Me interesa también la parte de testing QA y bases de datos.",
      "icons": ["fa-solid fa-bug", "fa-solid fa-database"]
    },
    {
      "description": "Conocimientos sólidos en herramientas ofimáticas, diseño gráfico y web.",
      "icons": ["fa-solid fa-file-excel", "fa-solid fa-palette", "fa-solid fa-globe"]
    },
    {
      "description": "Trabajar de manera colaborativa, aprender continuamente y conocer distintos tipos de metodologías de trabajo",
      "icons": ["fa-solid fa-users", "fa-solid fa-hand-holding-hand"]
    },
  ]
}

const about = document.querySelector('.about');

const databaseAbout = aboutInfo.info

function addCardInfo(){
  databaseAbout.forEach(item => {
    createCardInfo(item.description, item.icons)
  })
}

function createCardInfo(description, icons){
  const div = document.createElement("div")
  div.setAttribute("class","section__box mw-500 relative p-05 m-0-auto")

  const divRight = document.createElement("div")
  divRight.setAttribute("class","bg-principal-color absolute w-50px h-50px top-0 right-0 border-radius-5")
  const divRightOffset = document.createElement("div")
  divRightOffset.setAttribute("class","bg-black absolute w-100 h-100 topOffset rightOffset border-radius-5")
  divRight.appendChild(divRightOffset)

  const divLeft = document.createElement("div")
  divLeft.setAttribute("class", "bg-principal-color absolute w-50px h-50px zindex-1 left-0 bottom-0 border-radius-5")
  const divLeftOffset = document.createElement("div")
  divLeftOffset.setAttribute("class", "bg-black absolute w-100 h-100 bottomOffset leftOffset border-radius-5")
  divLeft.appendChild(divLeftOffset)

  const divContainer = document.createElement("div")
  divContainer.setAttribute("class", "relative zindex-1 d-flex flex-column p-1 align-center")
  const p = document.createElement("p")
  p.setAttribute("class", "section__description text-center")
  const pText = document.createTextNode(`${description}`)
  p.appendChild(pText)
  const divIcons = document.createElement("div") 
  divIcons.setAttribute("class", "section__icons d-flex gap-05")

  divContainer.append(p,divIcons)

  for (let i = 0; i < icons.length; i++) {
    const icon = document.createElement("i")
    icon.setAttribute("class", `${icons[i]} fa-2xl`)
    divIcons.appendChild(icon)
  }
  
  div.append(divRight,divLeft,divContainer)
  about.appendChild(div)
}

addCardInfo()