const { obterAgentes } = require('./service')

async function main(){
    try {
        const{
            data
        } = await obterAgentes('')

        const agentes = data.filter(function(item){
            const result = item.displayName.toLowerCase().indexOf('jett') !== -1
            return result
        })

        const names = agentes.map(agentes=>agentes.displayName)
        console.log('Nomes', names)

    } catch (error) {
        console.log('Erro 404', error)
    }

}

main()