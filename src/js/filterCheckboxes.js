const addCheckbox = (section,date) => {
    const sectionDate = section + date
    const input = document.createElement("input")
    const label = document.createElement("label")
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", sectionDate)
    input.setAttribute("value", sectionDate)
    input.setAttribute("id", sectionDate)
    input.setAttribute("class",section+"Year")
    if(date !== "2024")
        input.checked = true
    label.setAttribute("for", sectionDate)
    const labelText = document.createTextNode(date)
    label.appendChild(labelText)
    label.setAttribute("for", sectionDate)

    const inputFilter = document.querySelector(`.${section} .yearCheckboxes`)
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
    dates.forEach(item => {
        addCheckbox("projects", item)
    })
    
    years.forEach(item => {
        addCheckbox("certificates", item)
    })
}

addDates()

const checkboxesprojects = $$('.projects input[type="checkbox"]')
const checkboxesCertificates = $$('.certificates input[type="checkbox"]')
let checkboxesprojectsChecked = []
let checkboxesCertificatesChecked = []

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