function Person(name){
    this.name = name;
    this.greetings = function(){
        console.log("Hi I am " + this.name + ".")
    }
}

let person1 = new Person('Bob')
let person2 = new Person('Sarah')

person1.name
person1.greetings()
person2.name
person2.greetings()