
const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote corretamente para classificar o projeto', () => {
    test('Retornar pacote basico caso o numero total seja de até 50', () => {
        
        const totalDeHorasPorProjeto = 49

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico')
    })

    test('Retornar pacote basico caso o numero total seja extamente o 50', () => {
        
        const totalDeHorasPorProjeto = 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico')
    })


})














// explicação before/after

// class Calculadora {
//     somar(a, b) {
//       return a + b;
//     }
  
//     subtrair(a, b) {
//       return a - b;
//     }
//   }



// module.exports = {
//   somar: (a, b) => a + b,
//   subtrair: (a, b) => a - b
// };




// describe('calcular pacote corretamente para classificar o projeto ', () => {
//     test(' retornar o pacote basico caso o numero total seja de 50', () => {
  
//     const totalDeHorasPorProjeto = 49
//     const result = calcularPacote(totalDeHorasPorProjeto)

//     expect(result).toEqual('pacote_basico')
    
// })
//   })

//   test(' retornar o pacote basico caso o numero total seja exatamente o 50', () => {
  
//     const totalDeHorasPorProjeto = 50
//     const result = calcularPacote(totalDeHorasPorProjeto)

//     expect(result).toEqual('pacote_basico')
    
// })