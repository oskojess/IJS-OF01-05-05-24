const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')


describe('retornar o valor arrendondado correto dado o valor que recebemos ao mês', () => {
    test('retornar o valor que ganhamos por hora de trabalho', () => {

        const valorPorMes = 5000 //dado mocado, ficticio

        const result = calcularValorPorHora(valorPorMes)


        expect(result).toEqual(29)
    })
})