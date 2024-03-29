const createSVG = (className) =>{
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("class", className)
    svg.setAttribute("viewBox", "0 0 20 20")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", "M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z")

    svg.appendChild(path)

    return svg
}