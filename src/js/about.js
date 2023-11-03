const aboutInfo = {
  "info": [
    {
      "description": "Soy técnico en mantenimiento y armado de PC certificado del IAC.",
      "icons": ["computer-solid", "screwdriver-wrench-solid"]
    },
    {
      "description": "Estudio programación desde mediados del 2020",
      "icons": ["pencil-solid", "code-solid"]
    },
    {
      "description": "Tengo conocimientos en HTML, CSS, JS y algunos frameworks (Bootstrap y Tailwind)",
      "icons": ["html5", "css3-alt", "square-js", "bootstrap"]
    },
    {
      "description": "También conozco Python y Java, y estoy estudiando ReactJS, Spring, PHP, entre otros.",
      "icons": ["python", "java", "react", "php"]
    },
    {
      "description": "Usando herramientas de planificación e inteligencia artificial para potenciar el trabajo y proyectos",
      "icons": ["pen-to-square-solid", "brain-solid", "comment-dots-solid"]
    },
    {
      "description": "Me interesa también la parte de testing QA y bases de datos.",
      "icons": ["bug-solid", "database-solid"]
    },
    {
      "description": "Conocimientos sólidos en herramientas ofimáticas, diseño gráfico y web.",
      "icons": ["file-excel-solid", "palette-solid", "globe-solid"]
    },
    {
      "description": "Trabajar colaborativamente, aprendizaje constante y conocer distintas metodologías de trabajo",
      "icons": ["users-solid", "hand-holding-hand-solid"]
    },
  ]
}

const about = document.querySelector('.about');

const databaseAbout = aboutInfo.info

function addCardAboutInfo() {
  databaseAbout.forEach(item => {
    createCardAboutInfo(item.description, item.icons)
  })
}

function createCardAboutInfo(description, icons) {
  const div = document.createElement("div");
  div.className = "section__box mw-500 relative p-05 m-0-auto w-100 gap-1";

  const createElementWithClass = (element, className) => {
    const newDiv = document.createElement(element);
    newDiv.className = className;
    return newDiv;
  };

  const chevronBottomRight = createSVG("chevron-bottom-right");
  const chevronTopLeft = createSVG("chevron-top-left");

  const divContainer = createElementWithClass("div", "relative zindex-1 d-flex flex-column p-1 align-center gap-05");
  const p = document.createElement("p");
  p.className = "section__description text-center";
  p.textContent = description;
  const divIcons = createElementWithClass("div", "section__icons d-flex gap-05");

  divContainer.appendChild(p);
  divContainer.appendChild(divIcons);

  for (let j = 0; j < icons.length; j++) {
    const icon = document.createElement("img");
    icon.setAttribute("src", `./src/img/icons/${icons[j]}.svg`);
    divIcons.appendChild(icon);
  }

  div.appendChild(chevronBottomRight);
  div.appendChild(chevronTopLeft);
  div.appendChild(divContainer);

  about.appendChild(div);
}

addCardAboutInfo()