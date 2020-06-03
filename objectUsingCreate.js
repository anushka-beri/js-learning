let person1 = new Object({ // passing an object literal to Object() constructor
    name: 'Jane',
    age: 32,
    greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
    }
  });

let person2 = Object.create(person1)

person2.name
person2.greeting()