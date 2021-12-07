//  Não pode repetir o mesmo numero no array;
//  Ordenar o array do min para o max
// um array contento seis numeros

const lastResult = []

const sortaNumber = () => {

    const min = 1
    const max = 60

    for (let index = 0; index < 6; index++) {

        let continuation = true

        while (
            continuation) {

            let result = Math.round(Math.random() * (max - min) + min)
            const listNumbers = lastResult.find(r => r === result)

            if (!listNumbers) {
                lastResult.push(result)
                continuation = false
            }
        }
    }
}

sortaNumber()
console.log(lastResult.sort((a, b) => a - b))