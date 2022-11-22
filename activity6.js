let validacion = /http[s]?:\/{0,3}[._\w_-]{0,}[[:]?[\w]{1,}]?\@[.-\w_-]{1,}[:]?[\d]{4}[[/][.-\w_/]{1,}]?$/

// /http[s]? -> esto lo que hace es que la "s" de http sea opcional
// \/{0,3} -> puede haver de 0 a 3 "/"
// [._\w_-]{0,} -> esto es para el nombre d usuario, se traga "." y "-" tambien letras y numeros y puede haver como tambien no haver ya que es opcional
// [[:]?[\w]{0,}]? -> los puntos de separacion es opcional y la contraseña tambien 
//  \@ -> esto ira detras de la contrasenya si hay o detras del usuario si hay sino despues de las barras si hay y sino despues de los 2 puntos del protocolo
// [.-\w_-]{1,} -> ya que la maquina es obligatoria y tiene el mismo foramato que el usuario pues cambiamos de 0 a muchos por 1 a muchos caracteres
// [:]?[\d]{4} -> detras del nombre de la maquina puede haver dos puntos y detras de los dos puntos 4 digitos numericos que sera el puerto
// [[/][.-\w_/]{1,}]? -> ya que las rutas son opcionales pues...
let url = "http:///vicent.Morant-Boigues:contrasenya123@cuidao.maquina:2000/home/vicent.morant/escritorio";
if(validacion.test(url)){
    console.log("Url Valido")
}else{
    console.log("Url Invalido")
}