// objetos literales

var user = {
    name: 'John',
    surname: 'Doe',
    height: 1.73,
    weight:  65,
    interests: ['programming', 'tv-series', 'chess', 'english'],
    isWorking: true
};
console.log(user.name + user.interests);
console.log(user['surname']);

// objetos con 'Object'

var user2 = new Object();
user2.name = 'Maria';
user2.surname = 'Smith';
user2['isWorking']=false;

console.log(user2);

// objetos y métodos

var user3 = {
    // properties
    name: 'John',
    surname: 'Doe',
    birthYear: 1987,
    height: 1.73,
    weight:  65,
    interests: ['programming', 'tv-series', 'chess', 'english'],
    isWorking: true,
    
    // method
    calculateAge: function(birthYear){
        this.age = 2020-this.birthYear
    }
};
user3.calculateAge();
console.log(user3);