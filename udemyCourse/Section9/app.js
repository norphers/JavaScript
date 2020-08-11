// creation of an object
/*
let book1 = {
    title: 'JavaScript Book',
    author: 'John Doe',
    pages: 435,
    published: false
}

let book2 = {
    title: 'Programming an API REST',
    author: 'John Doe',
    pages: 700,
    published: true
}

let getReview = (book) => { 
    return {
        review: `${book.title} - ${book.author}`,
    }
};

console.log(getReview(book2));
*/

let employee = {
    name: 'John',
    age: '30',
    salary: 1200,

    greetings: function(){
        return `Hello, I'm ${this.name} and I have ${this.age} years old.`;
    },

    changeAge: function(age){
        return this.age = age;
    }

}

employee.changeAge('35');
console.log(employee.greetings());