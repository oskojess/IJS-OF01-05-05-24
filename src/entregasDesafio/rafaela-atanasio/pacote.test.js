const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote corretamente para classificar o projeto', () => {
    test('Retornar pacote básico caso o número total seja de até 50', () => {

        const totalDeHorasPorProjeto = 49 // fictício, mas o número tinha que ser até 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico') // vai retornar uma string, pacote básico, intermediário ou premium
    })

    test('Retornar pacote básico caso o número total seja exatamente o 50', () => {

        const totalDeHorasPorProjeto = 50 // fictício, mas o número tinha que ser até 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico') // vai retornar uma string, pacote básico, intermediário ou premium
    })

    test('Retornar pacote intermediário caso o número total seja de 51 até o 100', () => {

        const totalDeHorasPorProjeto = 99 // fictício, mas o número tinha que ser até 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_intermediario') // vai retornar uma string, pacote básico, intermediário ou premium
    })

    test('Retornar pacote intermediário caso o número total seja exatamente o 100', () => {

        const totalDeHorasPorProjeto = 100 // fictício, mas o número tinha que ser até 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_intermediario') // vai retornar uma string, pacote básico, intermediário ou premium
    })

    test('Retornar pacote premium caso o número total seja de 101 até o 200', () => {

        const totalDeHorasPorProjeto = 199 // fictício, mas o número tinha que ser até 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_premium') // vai retornar uma string, pacote básico, intermediário ou premium
    })

    test('Retornar pacote premium caso o número total seja exatamente o 200', () => {

        const totalDeHorasPorProjeto = 200 // fictício, mas o número tinha que ser até 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_premium') // vai retornar uma string, pacote básico, intermediário ou premium
    })

})