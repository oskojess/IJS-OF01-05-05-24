const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote corretamente para classificar o projeto', () => {
    test('Retornar pacote básico caso o número total seja de até 50 horas', () => {
  
        const totalDeHorasPorProjeto = 49

        const result = calcularPacote(totalDeHorasPorProjeto)

      expect(result).toEqual('pacote_basico')
    })

    test('Retornar pacote básico caso o número total seja de exatamente 50 horas', () => {
  
        const totalDeHorasPorProjeto = 50

        const result = calcularPacote(totalDeHorasPorProjeto)

      expect(result).toEqual('pacote_basico')
    })

    test('Retornar pacote básico caso o número total enteja entre 51 e 99 horas', () => {
  
        const totalDeHorasPorProjeto = 51

        const result = calcularPacote(totalDeHorasPorProjeto)

      expect(result).toEqual('pacote_intermediario')
    })

    test('Retornar pacote básico caso o número total seja de exatamente 100 horas', () => {
  
        const totalDeHorasPorProjeto = 100

        const result = calcularPacote(totalDeHorasPorProjeto)

      expect(result).toEqual('pacote_intermediario')
    })

    test('Retornar pacote básico caso o número total enteja entre 101 e 199 horas', () => {
  
        const totalDeHorasPorProjeto = 101

        const result = calcularPacote(totalDeHorasPorProjeto)

      expect(result).toEqual('pacote_premium')
    })

    test('Retornar pacote básico caso o número total seja de exatamente 200 horas', () => {
  
        const totalDeHorasPorProjeto = 200

        const result = calcularPacote(totalDeHorasPorProjeto)

      expect(result).toEqual('pacote_premium')
    })


  })