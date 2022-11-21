function Ordenador(marca, modelo, ram = 4, memo = 512, pulgadas = 17){
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram; 
    this.memoria = memo;
    this.pulgadas = pulgadas;

    this.informacion=()=>`(Marca: ${this.marca}, Modelo: ${this.modelo}, RAM: ${this.ram}, Memoria: ${this.memoria} y ${this.pulgadas} pulgadas)`;
}

function Laptop(marca, modelo, ram=4, memo=256, pulgadas=12, autonomia=4){
    this.__proto__ = new Ordenador(marca, modelo, ram, memo, pulgadas );
    this.autonomia = autonomia;
    this.informacion=()=>`(Marca: ${this.marca}, Modelo: ${this.modelo}, RAM: ${this.ram}, Memoria: ${this.memoria}, ${this.pulgadas} pulgadas y una autonimia de ${this.autonomia} horas)`;
}


let ordenador1 = new Ordenador('Apple', 'Mac');
let ordenador2 = new Ordenador('MSI', 'Heavy', 8, 1000, 21);

let portatil1 = new Laptop('Apple', 'MacBook');
let portatil2 = new Laptop('MSI', 'Heavy', 8, 400, 11, 9);

console.log(ordenador1.informacion());
console.log(ordenador2.informacion());
console.log(portatil1.informacion());
console.log(portatil2.informacion());