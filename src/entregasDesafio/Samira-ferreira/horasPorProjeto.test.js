const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')


describe('calcular horas totais do projeto para ser finalizado', () => {

    test('calcular valores contido em um array de funcionalidades', () => {

        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'formulario',
        ]
    
        const result = calcularHorasDeProjeto(funcionalidades)


        expect(result).toEqual(48)


    })

})
