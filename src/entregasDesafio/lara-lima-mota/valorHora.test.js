const{calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')


describe('Retornar o valor arredondado correto dado o valor que rececbemos ao mês', () => {
    test('Retornar o valor que ganhamos por hora de trabalho', () => {

        const valorPorMes = 5000
        
        const result = calcularValorPorHora(valorPorMes)

        console.log(result)

      expect(result).toEqual(29)
    })
  })