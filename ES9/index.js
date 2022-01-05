//ES9
//Operador de reposo puede extraer las caracteristicas de un objeto que aun no se a construido

 const obj = {
     name:'Brayan',
     age: 26,
     country: 'Chile'
 }

 //Operador de reposo para separar los elementos
 let {name, ...all} = obj;

 console.log(name, all);

 //EJEMPLO DE TALLER
 const auto = {
     patente: 'BYHS88',
     marca: 'chevrolet',
     modelo: 'spark',
     color: 'gris'
 }

 let {patente, ...all} = auto;

 console.log(patente, all);

 //tambien podria desestructurarlo para no mostrar la patente
 console.log(all);

 //a traves de las propiedades de propagacion podremos unir objetos en un nuevo objeto
 const obj = {
     patente: 'GTYB66',
     marca: 'chevrolet',
     modelo: 'sonic'
 }

 const obj2 = {
     //usamos ... operador de propagacion y unira el objeto anterior
     ...obj,
     dueno: 'Brayan Moya',
     rut: '19.057.787-2'
 }

 //console.log(obj2);

//Podemos saber cuando a terminado el llamado.
const mostrarDatosAuto = () => {
    return new Promise((resolve,reject) => {
        (true) 
        ? setTimeout(() => {
            resolve(obj2)
        }, 3000)
        : reject(new Error('Error no se ha encontrado vehiculo'))
    });
};

mostrarDatosAuto()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Fin llamado"))


    //Manejar regex
const regexDatos = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const match = regexDatos.exec('2022-01-04');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);