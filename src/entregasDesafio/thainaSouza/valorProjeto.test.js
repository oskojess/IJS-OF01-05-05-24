const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('Receber o total do valor do projeto', () => {
    beforeEach(() => {
        require('../../dominio/calculadora/Projeto/pacote').calcularPacote.mockReturnValue('pacote_basico')
    });

    test(' teste inicial ', () => {
        const funcionalidades = [
            "setup",
            "ssr",
            "construcao_1_pagina"
        ]

        const valorHora = 24;

        const result = calcularValorTotalProjeto(funcionalidades, valorHora);


        expect(result).toEqual(634);
    } )
})