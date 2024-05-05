const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

jest.mock('../../dominio/calculadora/projeto/pacote')

describe('receber o total do valor do projeto', () => {
    beforeEach(() => {
        require('../../dominio/calculadora/Projeto/pacote').calcularPacote.mockReturnValue('pacote_basico')

    })

    test('Fazer funcionalidade para dar um pacote basico', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'formulario',
          
          ];
      
          const valorHora = 29;
          const result = calcularValorTotalProjeto(funcionalidades, valorHora);
      
          expect(result).toEqual(1531);
        });
      });

