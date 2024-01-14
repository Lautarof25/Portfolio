const databaseAbout = aboutInfo.info
const databasePortfolio = portfolioInfo.info
const databaseCertificates = certificatesInfo.info
const databaseServices = servicesInfo.info

function addCardInfo(type, database) {
    const container = getContainerByType(type);

    database.forEach(item => {
        switch (type) {
            case 'portfolio':
                createCardPortfolioInfo(item.title,item.date, item.description, item.languages, item.thumbnail, item.github, item.webpage);
                break
            case 'services':
                createCardServicesInfo(item.title, item.description, item.icons)
                break
            case 'certificates':
                createCardCertificatesInfo(item.title, item.description, item.thumbnail, item.hours, item.year, item.link)
                break
            case 'about':
                createCardAboutInfo(item.description, item.icons)
                break
        }
    })
}

function getContainerByType(type) {
    switch (type) {
        case 'portfolio':
            return portfolio
        case 'services':
            return services
        case 'certificates':
            return certificates
        case 'about':
            return about
        default:
            throw new Error(`Unknown card type: ${type}`)
    }
}
addCardInfo('about', databaseAbout)    
addCardInfo('portfolio', databasePortfolio)
addCardInfo('certificates', databaseCertificates)
addCardInfo('services', databaseServices)