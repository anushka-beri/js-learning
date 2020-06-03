// using simple functions

function createNewPerson(name){
    const obj = {};
    obj.name = name;
    obj.greeting = function(){
        console.log("Hi I am " + obj.name + ".")
    }
    return obj;
}

const salva = createNewPerson('Salva')
salva.name;
salva.greeting();
