const palabras = new Map();
//añadimos cosas al set
palabras.set(1,"Optimal").set(2,"Noteworthy").set(3,"Noteworthy").set(4,"Excellent").set(5,"Improvable").set(6,"Excellent").set(7,"Noteworthy");

Map.prototype.change = function(){
    //creamos un map
    const mapa = new Map();
    //iniciamos un bucle 
    for(let [clave, valor] of this){
        //si el mapa tiene como clave el valor de la posicion del mapa recorrido
        if(mapa.has(valor)){     
            let nuevoValor = mapa.get(valor).push(clave);
        }else{            
            mapa.set(valor,[clave]);
        }        
    }
    //devolvemos el mapa
    return mapa
}
//mostramos el mapa
console.log(palabras.change());
