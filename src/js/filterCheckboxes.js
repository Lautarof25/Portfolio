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
    var sectionBoxes = $$(`.${currentIdPage()} .section__box`);

    sectionBoxes.forEach(function (sectionBox) {
        sectionBox.parentNode.removeChild(sectionBox);
    });
}   