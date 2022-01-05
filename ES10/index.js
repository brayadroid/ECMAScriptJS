//ES10
let array = [1,2,3, [1,2,3, [1,2,3]] ];

//array.flat devolver matriz con cualquier sub matriz aplanada
// flat recibe como argumento la profundidad
// por defecto aplana 1.
//si asignamos 2 aplana todo el array de nuestro ejemplo
console.log(array.flat(2));

// .map

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2])); 

//trim Start
let hello = '         Hola people      ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//podemos omitir el argumento catch(error)
try{

}catch{
    error
}


let entries = [["name","brayan"],["age",26]];
//object.fromEntries()
//Esta expresión retorna un objeto partiendo de los valores de un array, mientras que object.entries() es lo contrario.
console.log(Object.fromEntries(entries));

let miSimbolo = 'Mi simbolo';
let simbolo = Symbol(miSimbolo);

console.log(simbolo.description);