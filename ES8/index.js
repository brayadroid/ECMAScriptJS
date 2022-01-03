const datos = {
    frontend: "Brayan",
    backend: "Brayan",
    desing: "Brayan"
}

//transformar objeto a matriz
const entries = Object.entries(datos);
console.log(entries);
console.log(entries.length);

//object values
//Si lo dejo con la coma al final no pasa nada no muestra error porque s eusa si queremos agregar mas elementos.
const datos2 = {
    frontend: "Brayan",
    backend: "Brayan",
    desing: "Brayan",
}

//Imprimir solo los valores sin las asignaciones
const valores = Object.values(datos2);
console.log(valores);
console.log(valores.length);

//Pading 
const string = 'hello';
console.log(string.padStart(7,"hi"));
console.log(string.padEnd(12,"-----------"));