const checkboxesPortfolio = $$('.portfolio input[type="checkbox"]')
const checkboxesCertificates = $$('.certificates input[type="checkbox"]')
let checkboxesPortfolioChecked = []
let checkboxesCertificatesChecked = []

// const getCheckedDefault = () => {
//     checkboxesPortfolio.forEach(checkbox => {
//         if (checkbox.checked) {
//             checkboxesPortfolioChecked.push(checkbox.value.slice(-4))
//         }
//     })
// }

// getCheckedDefault()

// const addChecked = (ckbs, array) => {
//     ckbs.forEach(ckb => {
//         ckb.addEventListener('change', () => {
//             if (ckb.checked) {
//                 array.push(ckb.value.slice(-4))
//             } else {
//                 array = array.filter(function (i) { return i !== ckb.value.slice(-4) });
//             }
//             array.sort((a, b) => b - a)
//             removeElements()
//             addCardInfo(currentIdPage(), eval(`${currentIdPage()}Info.info`))
//         })
//     })
// }

// addChecked(checkboxesPortfolio, checkboxesPortfolioChecked)
// addChecked(checkboxesCertificates, checkboxesCertificatesChecked)

// function removeElements() {
//     var sectionBoxes = $$(`.${currentIdPage()} .section__box`);

//     sectionBoxes.forEach(function (sectionBox) {
//         sectionBox.parentNode.removeChild(sectionBox);
//     });
// }   