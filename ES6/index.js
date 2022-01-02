    //antes de ES6
    function newFunction(name, age, country){
        // name equals name OR Brayan
        var name  = name || "Brayan"; 
        var age = age || 26;
        var country = country || "Chile";
        
        console.log(name,age,country);
    }

    //that's how it is in ES6
    function newFunctionES6(name="Brayan",age=26,country="CL"){
        console.log(name,age,country);
    }

    newFunction();
    newFunctionES6(undefined,28,undefined);

    //Example How was concatenated before the ES6
    let hello = "hello";
    let world = "world";
    let epicPhrase = hello +" "+world;
    console.log(epicPhrase);

    //used quotation mark france for concatenated
    let epicPhraseES6 = `${hello} ${world}`;
    console.log(epicPhraseES6);


    /* LET y CONST, Multilínea, Spread Operator y Desestructuración*/

    //Multilinea
    let lorem = "Hola este es un ejemplo con \n" 
    + "Salto de linea asi se hacia antes de ES6";

    let loremES6 = `Hola este es un ejemplo con
    salto de linea asi se hace en ES6 con comillas francesas`;

    console.log(lorem);
    console.log(loremES6);

    //Desestructuración
    let person = {
        'name': 'Brayan',
        'age' : 26,
        'country' : 'Chile'
    };

    //asi se imprimia antes de ES6
    console.log(person.name, person.age, person.country);

    let {name,age,country} = person;
    //con ES6
    console.log(name,age,country);

    //Ejemplo de SPREAD OPERATOR (...)
    let team1 = ['Eladio','Monica','Vannia','Camila'];
    let team2 = ['Fernando','Francia','Brayan'];
    let teamMix = ['Renata','Violeta','Coca', ...team1, ...team2];

    console.log(teamMix);

    //VAR vs CONST en block 
    {
        //puede ser accedida desde el scope global
        var holaVarGlobal = "Hola Global var";
    }
    {
        // solo puede ser accedida desde el bloque
        let holaLetGlobal = "Hola Globar Let"
        console.log(holaLetGlobal);
    }
    console.log(holaVarGlobal); //funciona
    //console.log(holaLetGlobal); //No funciona

    /*const a = "algo";
    a = "otra cosa"; //no funciona
    no se puede reasignar con const porque es constante, se especifica en ES6.
    */


    //Arrows function, promesas y parametros en objeto
    let name = 'Brayan';
    let age = 26;

    //Antes de ECMAScript6 asi se definian los objetos
    obj = {name: name, age: age};

    //CON ES6
    obj2 = {name,age};

    console.log(obj);

    //Arrows function
    const names = [
        {name:'Brayan', age: 26},
        {name:'Vannia', age: 22}
    ];

    //ES5
    let listOfNames = names.map(function (item){
        console.log(item.name);
    });

    //ES6
    let listOfNames2 = names.map(item => console.log(item.name));

    const listOfNames3 = (name, age, country) => {
        ...
    };

    const listOfNames4 = name => {
        ...
    }

    const square = num => num * num;

    const helloPromise = () => {
        return new Promise((resolve, reject) => {
          if(true){
             resolve('Heyy');
            } else {
                reject ('Cueck');
          }
        });
    };

    helloPromise()
        .then(response => console.log(response))
        .then(() => console.log('hola'))
        .catch(error => console.log(error));


/* CLASES, MODULOS Y GENERADORES */
class Auto{
    constructor(){
        this.marca = '';
        this.modelo = '';
        this.ano = 0;
        this.patente = '';
    }

    obtenerDatos(marca,modelo,ano,patente){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.patente = patente;

        return this.marca+" "+this.modelo+" "+this.ano+" "+this.patente;
    }
}

const auto = new Auto();
console.log(auto.obtenerDatos("Mercedes-Benz","C180","2018","GYBH28"));


const dueno = require('./module');

console.log(dueno());

//Generator ES6 -> Funcion especial que retorna una serie de valores segun el algoritmo definido

function* helloWorld(){
    if(true){
        //yield permite retornar algo
        yield 'Hello, '; //guarda este estado de forma interna
    }

    if(true){
        yield 'World';//tenemos el segundo elemento que va hacer llamado cuando sea ejecutado el siguiente valor
    }
};

const generatorHello = helloWorld();

//Podremos utilizar el valor next 
// permite ejecutar la primera logica y obtener el valor segun sea el caso
// y cuando vuelva a ejecutar el siguiente valor next va a recordar donde estaba
// la asignacion logica  para mostrarme el segundo valor y asi por cada uno de estos pasos
// que pueda tener la logica en el generator
console.log(generatorHello.next().value);
// lo usamos denuevo para obtener el siguiente valor
console.log(generatorHello.next().value);
//tercera vez para ver que sucede
console.log(generatorHello.next().value);