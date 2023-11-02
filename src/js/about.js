const aboutInfo = {
  "info": [
    {
      "description": "Soy técnico en mantenimiento y armado de PC certificado del IAC.",
      "icons": [computerSolid, screwdriverWrenchSolid]
    },
    {
      "description": "Estudio programación desde mediados del 2020",
      "icons": [pencilSolid, codeSolid]
    },
    {
      "description": "Tengo conocimientos en HTML, CSS, JS y algunos frameworks (Bootstrap y Tailwind)",
      "icons": [html5, css3Alt,squareJs,bootstrap]
    },
    {
      "description": "También conozco Python y Java, y estoy estudiando ReactJS, Spring, PHP, entre otros.",
      "icons": [python, java,react,php]
    },
    {
      "description": "Usando herramientas de planificación e inteligencia artificial para potenciar el trabajo y proyectos",
      "icons": [ penToSquareSolid,brainSolid,commentDotsSolid]
    },
    {
      "description": "Me interesa también la parte de testing QA y bases de datos.",
      "icons": [bugSolid, databaseSolid]
    },
    {
      "description": "Conocimientos sólidos en herramientas ofimáticas, diseño gráfico y web.",
      "icons": [fileExcelSolid, paletteSolid, globeSolid]
    },
    {
      "description": "Trabajar colaborativamente, aprendizaje constante y conocer distintas metodologías de trabajo",
      "icons": [usersSolid, handHoldingHandSolid]
    },
  ]
}
/*
<i class="fa-solid fa-chevron-up"></i>
<i class="fa-solid fa-chevron-right"></i>
<i class="fa-solid fa-chevron-down"></i>
<i class="fa-solid fa-chevron-left"></i>
*/
const about = document.querySelector('.about');

const databaseAbout = aboutInfo.info

function addCardAboutInfo(){
  databaseAbout.forEach(item => {
    createCardAboutInfo(item.description, item.icons)
  })
}

function createCardAboutInfo(description, icons) {
  const div = document.createElement("div");
  div.className = "section__box mw-500 relative p-05 m-0-auto w-100 gap-1";

  const createElementWithClass = (element,className) => {
    const newDiv = document.createElement(element);
    newDiv.className = className;
    return newDiv;
  };

  const divRight = createElementWithClass("i","fa-solid fa-chevron-right");

  const divLeft = createElementWithClass("i","fa-solid fa-chevron-left");

  const divContainer = createElementWithClass("div","relative zindex-1 d-flex flex-column p-1 align-center gap-05");
  const p = document.createElement("p");
  p.className = "section__description text-center";
  p.textContent = description;
  const divIcons = createElementWithClass("div","section__icons d-flex gap-05");

  divContainer.appendChild(p);
  divContainer.appendChild(divIcons);

  for (let j = 0; j < icons.length; j++) {
    const icon = document.createElement("img");
    icon.setAttribute("src", `./src/img/icons/${icons[j]}`);
    divIcons.appendChild(icon);
  }

  div.appendChild(divRight);
  div.appendChild(divLeft);
  div.appendChild(divContainer);

  about.appendChild(div);
}

addCardAboutInfo()