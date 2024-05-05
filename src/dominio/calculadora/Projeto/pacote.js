const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
)[0];

exports.calcularPacote = calcularPacote;

//esse aqui calcula os pacotes (pega a hora de projeto e classifica o tipo de pacote)
//ta exportando o max de horas por pacote 
//na pasta constante tem as variaveis do max horas por pacote
