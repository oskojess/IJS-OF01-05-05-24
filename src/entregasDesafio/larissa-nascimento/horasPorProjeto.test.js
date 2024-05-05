const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')
describe('Calcular horas totais do projeto para ser finalizado', () => {
    
    test('Calcular valor contido em um array de funcionalidades de um projeto', () => {
        
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]

        const result = calcularHorasDeProjeto(funcionalidades)
        
        //console.log(result)

      expect(result).toEqual(72)

    })
  })