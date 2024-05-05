const {calcularHoraPorProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular horas totais do projeto para ser finalizado', () => {
    test('calcular valor contido em array de funcionalidades de um projeto, ', () => {
        const funcionalidades = {
            setup,
            formulario,
            responsividade,
            otimizacao_seo,
            construcao_1_pagina,
            ssr,
            
        }

        const resulte = calcularHorasDeProjeto(funcionalidades)

      expect(result).toEqual(72)
    })
  })