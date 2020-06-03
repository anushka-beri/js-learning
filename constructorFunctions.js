function Person(fname, lname, age, gender, interests){
    this.name = {
        first : fname,
        last: lname
    }
    this.age = age;
    this.gender= gender;
    this.interests = interests;
    this.bio = function(){
        console.log(this.name.first + ' ' + this.name.last + " " + 'is' + " " + this.age + " " + 'years old.' + ""+ this.gender + " " +'likes' + " " + this.interests[0] + " " + 'and' +" " +  this.interests[1])
    }
    this.greetings = function(){
        console.log("Hi I am" + this.name.first)
    }
}

let person1 = new Person('Bob') // new tells the browser to create a new object
let person2 = new Person('Bob', 'Smith', 32, 'He', ['music', 'skiing']);

// person1.name
// person1.greetings()
person2.name
person2.bio()
