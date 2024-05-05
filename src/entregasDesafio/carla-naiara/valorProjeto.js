// Projetofinal

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
        
        expect(result).toEqual(636);
    } )
})













// Cod.teste

// const { calcularPacote } = require('../../dominio/calculadora/Hora/valorHora')

// jest.mock('../../dominio/calculadora/Hora/valorHora')

// describe('receber o total do valor do projeto ', () => {
//     beforeEach(() => {
//         require('../../dominio/calculadora/Hora/valorHora').calcularPacote.mockReturnValue('pacote_basico')
//     })
    
//     test(' ', () => {
        
//         const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')
//         describe('Calcular pacote corretamente para classificar o projeto', () => {
//         test('Retornar pacote basico caso o numero total seja de até 50', () => {
        
//         const totalDeHorasPorProjeto = 49
//         const result = calcularPacote(totalDeHorasPorProjeto)
//         expect(result).toEqual('pacote_basico')
//     })
//         test('Retornar pacote basico caso o numero total seja extamente o 50', () => {
        
//         const totalDeHorasPorProjeto = 50
//         const result = calcularPacote(totalDeHorasPorProjeto)
//         expect(result).toEqual('pacote_basico')
//     })
//         test('Retornar pacote intermediário caso o numero total seja extamente entre 51 e 199', () => {
        
//         const totalDeHorasPorProjeto = 59
//         const result = calcularPacote(totalDeHorasPorProjeto)
//         expect(result).toEqual('pacote_intermediario')
//     })

//         test('Retornar pacote premium caso o numero total seja maior ou igual a 200', () => {
        
//         const totalDeHorasPorProjeto = 200
//         const result = calcularPacote(totalDeHorasPorProjeto)
//         expect(result).toEqual('pacote_premium')

// })
//         expect(result).toEqual('pacote_premium')
//     })
//   })







// })