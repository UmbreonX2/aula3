const service = require('./service')

async function main(){
    try {
        const result = await service.obterAgentes('')
        const names = []

        for(let i in result.data){    
            const agentes = result.data[i]
            names.push(agentes.displayName)
        }

        console.log('Nomes', names)

    } catch (error) {
        console.log('Erro 404', error)
    }

}

main()