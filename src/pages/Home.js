import fetchData from "../api/fetchData";

const avoContainer = document.querySelector('#avocado-section')

const formatCurrency = number => {
    const format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number)
    return format
}

const HomePage = async () => {
    const fetch = await fetchData()
    const data = Object.entries(fetch.data)
    const dataArr = data[1][1]

    console.log(dataArr)

    if (!avoContainer.hasChildNodes()) {

        dataArr.forEach(item => {
            // Creating elements
            const card = document.createElement('div')
            const infoCard = document.createElement('div')
            const description = document.createElement('div')
            const img = document.createElement('img')
            const title = document.createElement('h2')
            const price = document.createElement('p')

            // Adding some CSS styles
            card.classList.add('card')
            infoCard.classList.add('card-info')
            description.classList.add('card-description')
    
            // Adding content to the elements created
            img.src = `${fetch.base_url}${item.image}`
            title.textContent = item.name
            price.textContent = formatCurrency(item.price)
            description.textContent = item.attributes.taste
    
            // Adding elements to div container
            infoCard.append(title, price)
            card.append(img, infoCard, description)
    
            // Adding div continaer to main container
            avoContainer.appendChild(card)
        })
        
    }

}

export default HomePage