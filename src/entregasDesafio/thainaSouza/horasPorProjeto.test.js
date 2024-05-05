const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');


describe('horas totais por projeto para ser finalizado ', () => {
    test('calcular valores contido em um array de funcionalidades de um projeto', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'formulario',
            'ssr',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
        ]

        const result = calcularHorasDeProjeto(funcionalidades)



        expect(result).toEqual(72)
    })
})