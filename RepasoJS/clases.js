class carro{
    constructor(modelo, velocidad, color, marca){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.color = color;
        this.marca = marca;
    };

    aumentarVelocidad(){
        this.velocidad += 1;
    };

    reducirVelocidad(){
        this.velocidad -=1; 
    };

};

class bus extends carro{
    constructor(modelo, velocidad, color, marca){
        super(modelo, velocidad, color, marca);
        this.pasajeros = 35 ;
    }

    mostrarNroPasajeros(){
        return "El numero de pasajeros es: " + this.pasajeros;
    };
}

var carro1 = new carro (2020, 150, 'gris', 'mercedez');
var carro2 = new carro (2020, 150, 'gris', 'audi');
var carro3 = new carro (2020, 150, 'gris', 'Buggati');
var carro4 = new carro (2020, 150, 'gris', 'ferrari');
var bus1 = new bus (2020, 150, 'blanco', 'Chevrolet');


console.log(carro1 + " " + carro2 + " " + carro3 + " " + carro4);
carro1.aumentarVelocidad();
carro2.reducirVelocidad();
console.log(carro1);

console.log(bus1);
bus1.aumentarVelocidad();
console.log(bus1);

console.log(bus1.mostrarNroPasajeros());