const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote corretamente para classificar o projeto', () => { //descrição ampla
    
    test('Retornar pacote basico caso o total seja de ate 50', () => { //descrição mais precisa
       
        const totalDeHorasProProjeto = 49

        const result = calcularPacote(totalDeHorasProProjeto)
        
        //console.log(result)

      expect(result).toEqual('pacote_basico')

    })

    test('Retornar pacote basico caso o numero total seja exatamente o 50', () => { //descrição mais precisa
       
        const totalDeHorasProProjeto = 50

        const result = calcularPacote(totalDeHorasProProjeto)
        
       // console.log(result)

      expect(result).toEqual('pacote_basico')

    })

    test('Retornar pacote intermediário caso o numero total seja maior que 50', () => { //descrição mais precisa
       
        const totalDeHorasProProjeto = 51

        const result = calcularPacote(totalDeHorasProProjeto)
        
       // console.log(result)

      expect(result).toEqual('pacote_intermediario')

    })

    test('Retornar pacote basico caso o numero total seja exatamente o 50', () => { //descrição mais precisa
       
        const totalDeHorasProProjeto = 100

        const result = calcularPacote(totalDeHorasProProjeto)
        
       // console.log(result)

      expect(result).toEqual('pacote_intermediario')

    })

 
    test('Retornar pacote premium caso o numero total seja igual a 200', () => { //descrição mais precisa
       
        const totalDeHorasProProjeto = 200

        const result = calcularPacote(totalDeHorasProProjeto)
        
       // console.log(result)

      expect(result).toEqual('pacote_premium')

    })

 
 



  })