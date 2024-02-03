const addCheckbox = (section,date) => {
    const sectionDate = section + date
    const input = document.createElement("input")
    const label = document.createElement("label")
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", sectionDate)
    input.setAttribute("value", sectionDate)
    input.setAttribute("id", sectionDate)
    if(date !== "2024")
        input.checked = true
    label.setAttribute("for", sectionDate)
    const labelText = document.createTextNode(date)
    label.appendChild(labelText)
    label.setAttribute("for", sectionDate)

    const inputFilter = document.querySelector(`.${section} .section__filter`)
    inputFilter.append(input, label)
}

const dates = new Set()
const years = new Set()

portfolioInfo.info.forEach(item => {
    dates.add(item.date.slice(0, 4))
})
certificatesInfo.info.forEach(item => {
    years.add(item.year)
})

dates.forEach(item => {
    addCheckbox("portfolio", item)
})

years.forEach(item => {
    addCheckbox("certificates", item)
})

const checkboxesPortfolio = $$('.portfolio input[type="checkbox"]')
const checkboxesCertificates = $$('.certificates input[type="checkbox"]')
let checkboxesPortfolioChecked = []
let checkboxesCertificatesChecked = []

const getCheckedDefault = () => {
    checkboxesPortfolio.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesPortfolioChecked.push(checkbox.value.slice(-4))
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

getCheckedChanged(checkboxesPortfolio, checkboxesPortfolioChecked)
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
filterCards(checkboxesPortfolio,"portfolio",portfolioInfo.info)

const removeElements = () => {
    var sectionBoxes = $$(`.${currentIdPage()} .section__box`)

    sectionBoxes.forEach(function (sectionBox) {
        sectionBox.parentNode.removeChild(sectionBox)
    })
}   