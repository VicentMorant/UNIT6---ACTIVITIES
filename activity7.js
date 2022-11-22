//esta es la validacion
let validacionNif = /^[X-Z]?[0-9]{7}[A-Z]{1}$/;

var nif = "Y123567L";

if(validacionNif.test(nif)){
    //creamos una variable del tamaño del string
    let longitud = nif.length;

    let numero= "";
    //recorrreremos el nif menos la ultima posicion y lo guardaremos en un string                  
    for(let i =0; i<longitud-1; i++){        
        numero  = numero + (nif.charAt(i));            
    }

    //remplazaremos la primera letra por numeros
    if(nif.charAt(0) == 'Z'){
        numero = numero.replace('Z',2);

    }else if( nif.charAt(0) == 'Y'){
        numero = numero.replace('Y',1);

    }else{
        numero = numero.replace('X',0);
    }
    //convertiremos el string a un numero
    numero = parseInt(numero)
    numero = numero%23;

    //Esta es la serie de letras que puede haber en un NIF
    let letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    //aqui cojeremos la verdadera letra que deberia haver en un nif 
    letra = letra.substring(numero, numero + 1);
    //console.log(nif.charAt(longitud-1));

    //Si el nif es correcto...
    if(letra == nif.charAt(longitud-1)){
        console.log("El nif es correcto");
    }else{
        console.log("El nif es incorrecto, la letra deberia ser: " +letra );
    }
}else{
    console.log("El formato del nif es incorrecto");
}
