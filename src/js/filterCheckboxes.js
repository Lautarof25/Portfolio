function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

const addCheckbox = (section,item) => {
    const sectionItem = section + item
    const input = document.createElement("input")
    const label = document.createElement("label")
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", sectionItem)
    input.setAttribute("value", sectionItem)
    input.setAttribute("id", sectionItem)
    if(item !== "2024")
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

const checkboxesprojects = $$('.projects .yearCheckboxes input[type="checkbox"]')
const checkboxesCertificates = $$('.certificates .yearCheckboxes input[type="checkbox"]')
const checkboxesCertificatesCategories = $$('.certificates .categoryCheckboxes input[type="checkbox"]')
let checkboxesprojectsChecked = []
let checkboxesCertificatesChecked = []
let checkboxesCertificatesCheckedCategories = []

const getCheckedDefault = () => {
    checkboxesprojects.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesprojectsChecked.push(checkbox.value.slice(-4))
        }
    })
    checkboxesCertificates.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesCertificatesChecked.push(checkbox.value.slice(-4))
        }
    })
    checkboxesCertificatesCategories.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesCertificatesCheckedCategories.push(checkbox.className)
        }
    })
}

getCheckedDefault()

const getCheckedChanged = (element, array) => {
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

getCheckedChanged(checkboxesprojects, checkboxesprojectsChecked)
getCheckedChanged(checkboxesCertificates, checkboxesCertificatesChecked)

const filterCards = (checkboxes,section,data) =>{
    checkboxes.forEach(chk => {
        chk.addEventListener('change', () => {
            removeElements()
            addCardInfo(section, data)
        })
    })
}

filterCards(checkboxesCertificates,"certificates",certificatesInfo.info)
filterCards(checkboxesprojects,"projects",projectsInfo.info)

const removeElements = () => {
    var sectionBoxes = $$(`.${currentIdPage()} .section__box`)

    sectionBoxes.forEach(function (sectionBox) {
        sectionBox.parentNode.removeChild(sectionBox)
    })
}   