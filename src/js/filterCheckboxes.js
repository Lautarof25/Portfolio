function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

const addCheckbox = (section,item) => {
    const sectionItem = section + item
    const input = document.createElement("input")
    const label = document.createElement("label")
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", sectionItem)
    input.setAttribute("value", sectionItem)
    input.setAttribute("id", sectionItem)
    // if(item !== "2024")
        input.checked = true
    label.setAttribute("for", sectionItem)
    const labelText = document.createTextNode(item)
    label.appendChild(labelText)
    label.setAttribute("for", sectionItem)
    let inputFilter
    if(isNumber(item)){
        inputFilter = document.querySelector(`.${section} .yearCheckboxes`)
        input.setAttribute("class",section+"Year")
    }
    else {
        inputFilter = document.querySelector(`.${section} .categoryCheckboxes`)
        input.setAttribute("class",section+"Category")
    }
    inputFilter.append(input, label)
}

const dates = new Set()
const years = new Set()
const categoriesCertificates = new Set()

const getDates = ()=> {
    projectsInfo.info.forEach(item => {
        dates.add(item.date.slice(0, 4))
    })
    certificatesInfo.info.forEach(item => {
        years.add(item.year)
    })
}

const getCategories = ()=> {
    certificatesInfo.info.forEach(item => {
        categoriesCertificates.add(item.category)
    })
}

getDates()

getCategories()

const addDates = () => {
    dates.forEach(date => {
        addCheckbox("projects", date)
    })
    
    years.forEach(year => {
        addCheckbox("certificates", year)
    })
}

const addCategories = () => {    
    categoriesCertificates.forEach(category => {
        addCheckbox("certificates", category)
    })
}

addDates()
addCategories()

const checkboxesProjectsYears = $$('.projects .yearCheckboxes input[type="checkbox"]')
const checkboxesCertificatesYears = $$('.certificates .yearCheckboxes input[type="checkbox"]')
const checkboxesCertificatesCategories = $$('.certificates .categoryCheckboxes input[type="checkbox"]')
let checkboxesProjectsYearsChecked = []
let checkboxesCertificatesYearsChecked = []
let checkboxesCertificatesCategoriesChecked = []

const getCheckedDefault = () => {
    checkboxesProjectsYears.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesProjectsYearsChecked.push(checkbox.value.slice(-4))
        }
    })
    checkboxesCertificatesYears.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesCertificatesYearsChecked.push(checkbox.value.slice(-4))
        }
    })
    checkboxesCertificatesCategories.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesCertificatesCategoriesChecked.push(checkbox.id.slice(12,15))
        }
    })
}

getCheckedDefault()

const getCheckedYearUpdated = (element, array) => {
    element.forEach(ckb => {
        ckb.addEventListener('change', () => {
            let arrayDefault = [...array]
            if (ckb.checked) {
                arrayDefault.push(ckb.value.slice(-4))
            } else {
                arrayDefault = arrayDefault.filter(function (i) {
                    return i !== ckb.value.slice(-4)
                })
            }
            arrayDefault.sort((a, b) => b - a)
            
            array.length = 0
            array.push(...arrayDefault)
        })
    })
}

const getCheckedCategoriesUpdated = (element, array) => {
    element.forEach(ckb => {
        ckb.addEventListener('change', () => {
            let arrayDefault = [...array]
            if (ckb.checked) {
                arrayDefault.push(ckb.value.slice(12,15))
            } else {
                arrayDefault = arrayDefault.filter(function (i) {
                    return i !== ckb.value.slice(12,15)
                })
            }
            
            array.length = 0
            array.push(...arrayDefault)
        })
    })
}

getCheckedYearUpdated(checkboxesProjectsYears, checkboxesProjectsYearsChecked)
getCheckedYearUpdated(checkboxesCertificatesYears, checkboxesCertificatesYearsChecked)
getCheckedCategoriesUpdated(checkboxesCertificatesCategories, checkboxesCertificatesCategoriesChecked)

const filterCards = (checkboxes,section,data) =>{
    checkboxes.forEach(chk => {
        chk.addEventListener('change', () => {
            removeElements()
            // Function externa : DynamicsCards.js
            addCardInfo(section, data)
        })
    })
}

filterCards(checkboxesCertificatesYears,"certificates",certificatesInfo.info)
filterCards(checkboxesCertificatesCategories,"certificates",certificatesInfo.info)
filterCards(checkboxesProjectsYears,"projects",projectsInfo.info)

const removeElements = () => {
    const currentPage = currentIdPage() // Cachear para evitar llamar dos veces
    const sectionBoxes = $$(`.${currentPage} .section__box`)

    // Usar remove() que es más moderno y eficiente que removeChild
    sectionBoxes.forEach(function (sectionBox) {
        sectionBox.remove()
    })
}