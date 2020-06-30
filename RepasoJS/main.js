alert('Hola Mundo');

var nombre = 'LeMon';
var altura = 169;
var concatenar = nombre + " " + altura

/*
document.write(nombre); 
document.write(altura); 
document.write(concatenar); 

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Hola es una prueba</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura}</h3>
` ;

if (altura > 170){
    datos.innerHTML += `Eres una persona alta.`;
}else{
    datos.innerHTML += `Eres una persona bajita`;
}

for(var i = 0; i< 10; i++){
    datos.innerHTML += "<h2>Esta es una prueba de bucle for</h2>" + i;
}
*/

/*
function MostrarNombre(nombre, altura){
    var Misdatos =  `
        <h1>Hola es una prueba</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi altura es: ${altura}</h3>
    ` ;

    return Misdatos;
}

function Imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MostrarNombre("LemonnnnnLLL", 175);
}

Imprimir()

var nombres = ['Mabel', 'Vane', 'Harry'];

document.write('<h1>Listado de los nombres de mi familia</h1>')
for(var i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '</br>');
}

// Funcion de callback
document.write('<h1>Otra vez el listado con funcion de calback</h1>');
nombres.forEach(function(nombre){
    document.write(nombre + '</br>');
});

//Funcion de flecha
document.write('<h1>Otra vez el listado con funcion de flecha</h1>');
nombres.forEach((nombre) => {
    document.write(nombre + '</br>');
});
*/

//Objetos json
var carro = {
    marca: 'Mercedez',
    color: 'gris',
    modelo: '2020',
    MostrarDatos(){
        console.log(this.marca, this.color, this.modelo);
    },
};

document.write("<h1>" + carro.marca + "</br>" + carro.color + "</br>" + carro.modelo + "</h1>");

console.log(carro);

//Promesas
var saludar = new Promise ((resolve, reject) =>{
    
    setTimeout(() => {
        let saludo = "Hola parceros!!!";
        //saludo = false ;
        if (saludo){
            resolve(saludo);
        }else
        {
            reject("No hay saludo!!!");       
        };

    }, 2000) ;

})

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
    
});




