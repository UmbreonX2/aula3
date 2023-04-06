const axios = require('axios')
const URL = 'https://valorant-api.com/v1/agents'

async function obterAgentes(agentes){
    const urlAPI = `${URL}/${agentes}`
    const response = await axios.get(urlAPI)
    return response.data
}

module.exports = { obterAgentes }