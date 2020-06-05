function Person(name, age, gender, interests){
    this.name= name;
    this.age= age;
    this.gender = gender;
    this.interests = interests;
    this.introduction = function(){
        console.log("Hi I am" + " " + this.name + "." + this.gender + " " +'likes' + " " + this.interests[0] + " " + 'and' +" " +  this.interests[1])
    }
}

let person1 = new Person('Bob', 32, 'male', ['music', 'skiing']);

// person1.introduction()
person1.valueOf()