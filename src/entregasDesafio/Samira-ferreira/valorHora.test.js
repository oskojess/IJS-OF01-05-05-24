const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')


describe('retornar o valor arredondado correto dado o valor que recebemos ao mes', () => {

    test('retornar valor que ganhamos por hora de trabalho', () => {

        const valorPorMes = 5000
        const result = calcularValorPorHora(valorPorMes)
        
      expect(result).toEqual(29)

    })  

})
