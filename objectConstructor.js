// creating objects using object constructor
// 1 way
let person1 = new Object();

person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  console.log('Hi! I\'m ' + this.name + '.');
};

// _______________________________________________ 

//2 way
let person2 = new Object({ // passing an object literal to Object() constructor
    name: 'Jane',
    age: 32,
    greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
    }
  });

person1.greeting()
person2.greeting()