const aboutInfo = {
  "info": [
    {
      "description": "Soy técnico en mantenimiento y armado de PC del IAC.",
      "icons": ["fa-computer", "fa-screwdriver-wrench"]
    },
    {
      "description": "Estudio programación desde mediados del 2020",
      "icons": ["fa-pencil", "fa-code"]
    },
    {
      "description": "Tengo conocimientos en HTML, CSS, JS y algunos frameworks (Bootstrap y Tailwind)",
      "icons": ["fa-html5", "fa-css5","fa-js","fa-bootstrap"]
    },
    {
      "description": "También conozco Python y Java, y estoy estudiando ReactJS, Spring, PHP, entre otros.",
      "icons": ["fa-python", "fa-java","fa-react","fa-php"]
    },
    {
      "description": "Me interesa también la parte de testing QA y bases de datos.",
      "icons": ["fa-bug", "fa-database"]
    },
  ]
}

const databaseAboute = aboutInfo.info

function addCardInfo(){
  databaseAboute.forEach(item => {

  })
}

function createCardInfo(length){
  const div = document.createElement("div")

  const divRight = document.createElement("div")
  const divRightOffset = document.createElement("div")

  const divLeft = document.createElement("div")
  const divLeftOffset = document.createElement("div")

  const divContainer = document.createElement("div")
  const p = document.createElement("p")
  const divIcons = document.createElement("div")  
  const icon = document.createElement("i")

  
}

{/* 
<div class="section__box mw-500 relative p-05 m-0-auto">
  <div class="bg-principal-color absolute w-50px h-50px top-0 right-0 border-radius-5">
    <div class="bg-black absolute w-100 h-100 topOffset rightOffset border-radius-5"></div>
  </div>
  <div class="bg-principal-color absolute w-50px h-50px zindex-1 left-0 bottom-0 border-radius-5">
    <div class="bg-black absolute w-100 h-100 bottomOffset leftOffset border-radius-5"></div>
  </div>
  <div class="relative zindex-1 d-flex flex-column p-1 align-center">
    <p class="section__description text-center">Me interesa también la parte de testing QA y bases de datos.</p>
    <div class="section__icons">
      <i class="fa-solid fa-bug fa-2xl"></i>
      <i class="fa-solid fa-database fa-2xl"></i>
    </div>
  </div> 
</div>*/}