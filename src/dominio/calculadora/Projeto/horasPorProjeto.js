const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(item => HORAS_POR_FUNCIONALIDADE[item])
    .reduce((acumulador, currentValue) => acumulador + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
