const { obterAgentes } = require('./service')

async function main(){
    try {
        const{
            data
        } = await obterAgentes('')

        const habilidadesQtde = data.map(habilidade=> habilidade.abilities.map(hab=> hab.slot))

        const contagem = habilidadesQtde.length

        console.log(habilidadesQtde)

        const somaTotal = habilidadesQtde.reduce((anterior, proximo, a)=>{
            let a=0
            a+= 1
            return anterior + proximo
        })
        
        console.log(somaTotal)

    } catch (error) {
        console.log('Erro 404', error)
    }

}

main()