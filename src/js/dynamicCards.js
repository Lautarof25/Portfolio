function addCardInfo(type, database) {
    const container = getContainerByType(type);

    database.forEach(item => {
        switch (type) {
            case 'about':
                createCardAboutInfo(item.description, item.descriptionHidden, item.icons)
                break
            case 'portfolio':
                // if(checkboxesPortfolioChecked.includes(item.date.slice(0,4))){
                    createCardPortfolioInfo(item.title, item.date, item.description, item.languages, item.thumbnail, item.github, item.webpage);
                // }
                break
            case 'certificates':
                // if(checkboxesCertificatesChecked.includes(String(item.year))){
                    createCardCertificatesInfo(item.title, item.description, item.thumbnail, item.hours, item.year, item.link)
                // }
                break
            case 'services':
                createCardServicesInfo(item.title, item.description, item.icons)
                break
        }
    })
}

function getContainerByType(type) {
    switch (type) {
        case 'about':
            return about
        case 'portfolio':
            return portfolio
        case 'certificates':
            return certificates
        case 'services':
            return services
        default:
            throw new Error(`Unknown card type: ${type}`)
    }
}
addCardInfo('about', aboutInfo.info)
addCardInfo('portfolio', portfolioInfo.info)
addCardInfo('certificates', certificatesInfo.info)
addCardInfo('services', servicesInfo.info)