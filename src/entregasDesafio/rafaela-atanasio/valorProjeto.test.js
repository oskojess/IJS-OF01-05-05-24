const { calcularValorTotalProjeto } =  require('../../dominio/calculadora/Projeto/valorProjeto')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('Receber o valor total do projeto', () => {
    beforeEach(() => {
        // antes de qlqr teste está simulando o mock e pegando dentro do pacote o pacote básico
        require('../../dominio/calculadora/Projeto/pacote').calcularPacote.mockReturnValue('pacote_basico')
    })

    test('Fazer funcionalidade para pacote básico', () => {
        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'ssr'
        ]

        const valorHora = 5000
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        console.log(result)


      expect(result).toEqual(132000)
    })
  })