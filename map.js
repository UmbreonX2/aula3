const service = require('./service')

async function main(){
    try {
        const result = await service.obterAgentes('')
        const agentes = result.data.map((agentes)=>agentes.displayName)

        console.log('Agentes', agentes)

    } catch (error) {
        console.log('Erro 404', error)
    }

}

main()