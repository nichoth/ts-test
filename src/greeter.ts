var fs = require('fs')

var foo = fs.readFileSync(__dirname + '/foo', 'utf8')
console.log('foo,', foo)

class Student {
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}
   
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user))
