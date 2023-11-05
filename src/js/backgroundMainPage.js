// Prueba de background image page
/*
Aplica de fondo el ícono de acuerdo a la página actual

- Consultar actual ".link-active" (evento escuchador)
    const elementLinkActive = document.querySelector(".link-active")
- Clonar el elemento svg del elemento con ".link-active"
    const elementCloned = elementLinkActive.childNodes[1].cloneNode(true)
- Agregar el elemento svg de fondo en el elemento ".backgroundPage"
    document.querySelector(".backgroundPage").appendChild(elementCloned)
*/