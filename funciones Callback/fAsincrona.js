// funciones Asynchronous setlnterval

let Reloj = () => {
    let Fecha = new Date;
    let Mes = Fecha.getDate();
    let Dia = Fecha.getDay();
    let Hora = Fecha.getHours();
    let Minuto = Fecha.getMinutes();
    console.log(`Mes: ${Mes} Dia: ${Dia} Hora: ${Hora} Minutos: ${Minuto}`);
}

setInterval(Reloj, 5000);