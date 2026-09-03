const data = new Date();
let diaSemana = data.getDay();
let diaDaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaDaSemanaTexto = "Domingo";
    break;
  case 1:
    diaDaSemanaTexto = "Segunda";
    break;
  case 2:
    diaDaSemanaTexto = "Terça";
    break;
  case 3:
    diaDaSemanaTexto = "Quarta";
    break;
  case 4:
    diaDaSemanaTexto = "Quinta";
    break;
  case 5:
    diaDaSemanaTexto = "Sexta";
    break;
  case 6:
    diaDaSemanaTexto = "Sábado";
    break;
  default:
    diaDaSemanaTexto = "Dia inválido";
    break;
}

console.log(`Hoje é ${diaDaSemanaTexto}`);
