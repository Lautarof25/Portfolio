const addCheckbox = (section,date) => {
    const sectionDate = section + date
    const input = document.createElement("input")
    const label = document.createElement("label")
    input.setAttribute("type", "checkbox")
    input.setAttribute("name", sectionDate)
    input.setAttribute("value", sectionDate)
    input.setAttribute("id", sectionDate)
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

checkboxesPortfolio.forEach(ckb => {
    ckb.addEventListener('change', () => {
        if (ckb.checked) {
            checkboxesPortfolioChecked.push(ckb.value.slice(-4))
        } if (!ckb.checked) {
            checkboxesPortfolioChecked = checkboxesPortfolioChecked.filter(function (i) { return i !== ckb.value.slice(-4) });
        }
        checkboxesPortfolioChecked.sort((a, b) => b - a)
        console.log(checkboxesPortfolioChecked)
    })
})

checkboxesCertificates.forEach(ckb => {
    ckb.addEventListener('change', () => {
        if (ckb.checked) {
            checkboxesCertificatesChecked.push(ckb.value.slice(-4))
        } if (!ckb.checked) {
            checkboxesCertificatesChecked = checkboxesCertificatesChecked.filter(function (i) { return i !== ckb.value.slice(-4) });
        }
        checkboxesCertificatesChecked.sort((a, b) => b - a)
        console.log(checkboxesCertificatesChecked)
    })
})

checkboxesPortfolio.forEach(chk => {
    chk.addEventListener('change', () => {
        removeElements()
        addCardInfo("portfolio", portfolioInfo.info)
    })
})
checkboxesCertificates.forEach(chk => {
    chk.addEventListener('change', () => {
        removeElements()
        addCardInfo("certificates", certificatesInfo.info)
    })
})

function removeElements() {
    var sectionBoxes = $$(`.${currentIdPage()} .section__box`)

    sectionBoxes.forEach(function (sectionBox) {
        sectionBox.parentNode.removeChild(sectionBox)
    })
}   