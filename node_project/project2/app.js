const users = require('./user');

console.log({ user1: users.user1, user2: users.user2, user3: users.user3, user4: users.user4 });
users.hello(users.user4); 

const person = users.person;
console.log(person);
console.log('name>>', person.name);
console.log('age>>', person.age);
console.log('tel>>', person.tel);