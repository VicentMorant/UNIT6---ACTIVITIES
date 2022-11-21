//creamos una fecha
let fecha = new Date(2022, 10, 25, 10);
console.log(fecha.toDateString());

//sacamos la hora y el dia
let hora = fecha.getHours();
let dia = fecha.getDay();
//si la hora esta entre 9 y 14 y el dia entre lunes y viernes 
// sabado = 6 || domingo = 1
if((hora >= 9 && hora <= 14) && (dia > 0 && dia < 6)){
    console.log("Bienvenido a la pagina");
}else{
    console.log("Pagina cerrada");
}

