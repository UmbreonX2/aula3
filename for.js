const service = require('./service')

async function main(){
    try {
        const result = await service.obterAgentes('')
        const names = []

        for(let i = 0; i <= result.data.length -1; i++){
            const agentes = result.data[i]
            names.push(agentes.displayName)
        }

        console.log('Agentes:', names)

    } catch (error) {
        console.log('Erro 404', error)
    }

}

main()