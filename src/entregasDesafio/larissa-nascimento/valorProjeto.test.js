const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('Receber o total do valor do projeto', () => {
    beforeEach(() => {
        require('../../dominio/calculadora/Projeto/valorProjeto').calcularPacote.mockReturnValue('pacote_basico')
    })

    test('Validar as funcionalidades', () => {

        const funcionalidades = [
            'setup',
            'construcao_1_pagina',
            'ssr'
        ]

        valorHora = 20

        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

      expect(result).toEqual(528)
    })
  })