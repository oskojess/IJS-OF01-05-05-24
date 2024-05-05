const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('Receber o total do valor do projeto', () => {
    beforeEach(() => {
        require('../../dominio/calculadora/Projeto/pacote').calcularPacote.mockReturnValue('pacote_basico')
    })
    
    test('Fazer funcionalidades para dar menos ou até 50 horas', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'ssr'
        ]

        const valor_hora = 32
        const result = calcularValorTotalProjeto(funcionalidades, valor_hora)
        console.log(result)
      expect(result).toEqual(1126)
    })
  })
