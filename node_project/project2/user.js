const user1 = "hyewon";
const user2 = "woojung";
const user3 = "harang";
const user4 = "byul";

const person = {
    name : 'byul',
    age : 25,
    tel : '010'
}


function hello(user){
    console.log(`${user}님, 안녕하세요?`);
}

module.exports = { user1, user2, user3, user4, hello, person };


