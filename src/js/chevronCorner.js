function createSVG(className) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("class", className)
    svg.setAttribute("viewBox", "0 0 320 512")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z")

    svg.appendChild(path)

    return svg
}