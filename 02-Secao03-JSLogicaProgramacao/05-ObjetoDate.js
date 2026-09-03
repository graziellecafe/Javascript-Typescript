// marco zero: 01/01/1970 Timestamp unix ou época unix

const data = new Date();
console.log(data.toString());

const dataAnoMesDia = new Date(2019, 3, 20, 15, 14, 27); // ano, mês -1, dia, hora, minuto, segundo
console.log(dataAnoMesDia);

const dataToString = new Date("2026-09-02 13:18:00");
console.log(`Data atual: `, dataToString);

const dataFull = new Date("2019-04-20 20:20:59");
console.log("Dia", dataFull.getDate());
console.log("Mês", dataFull.getMonth() + 1); // Mês começa do 0
console.log("Ano", dataFull.getFullYear());
