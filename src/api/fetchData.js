/*
*
* Fetch Data from avocado API
*
*/

const base_url = 'https://platzi-avo.vercel.app'

const fetchData = async () => {
    const response = await fetch(`${base_url}/api/avo`)
    const data = await response.json()
    return {
        data,
        base_url
    }
}

export default fetchData