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