const {calcularPacote} =require('../../dominio/calculadora/Projeto/pacote')

describe('calcular pacote corretamente para classificar o projeto', () => {

    test('Retornar pacote basico caso o numero total seja de até 50', () => {

        const totalDeHorasPorProjeto = 49
        const result = calcularPacote(totalDeHorasPorProjeto)
        

      expect(result).toEqual('pacote_basico')

    })  

    test('Retornar pacote basico caso o numero total seja extamete 50', () => {

        const totalDeHorasPorProjeto = 50
        const result = calcularPacote(totalDeHorasPorProjeto)
        

      expect(result).toEqual('pacote_basico')

    })  
    test('Retornar pacote basico caso o numero total seja extamete 51', () => {

        const totalDeHorasPorProjeto = 51
        const result = calcularPacote(totalDeHorasPorProjeto)
        

      expect(result).toEqual('pacote_intermediario')

    })  
    test('Retornar pacote basico caso o numero total seja extamete 100', () => {

        const totalDeHorasPorProjeto = 100
        const result = calcularPacote(totalDeHorasPorProjeto)
        

      expect(result).toEqual('pacote_intermediario')

    }) 
    test('Retornar pacote basico caso o numero total seja extamete 200', () => {

        const totalDeHorasPorProjeto = 200
        const result = calcularPacote(totalDeHorasPorProjeto)
        
      expect(result).toEqual('pacote_premium')

    })   
    

})
