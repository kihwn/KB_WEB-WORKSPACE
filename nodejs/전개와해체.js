//전개 ... : 배열을 합산하고자 할 때
//          gㅏ나씩 펼쳐서 전달한다.
let arr = [1,2,3];
let arr2 = [...arr, 4,5];
console.log(arr2);
console.log(...arr2); //배열을 해체하여 보여줌

function myfunc(...arr){ //가변인자 - 매개변수의 숫자가 정확하지 않을 때 사용
    console.log(arr);
}
myfunc(1,2);
myfunc(1,2,3,4,5);


//배열 합산
let a1=[1,2,3];
let b1=[5,6,7,8];
let c1=[...a1, ...b1];
console.log(c1);

//전개 연산자 없을 때 배열 결합하기
//concat 함수는 배열을 합산해서 새로운 배열을 반환
//push : 이전의 배열에서 계속 메모리를 늘려가는 방식이고, 
//concat는 새로 만들어서 던지는 방식
let c2 = c1.concat([10,20,30]);
console.log(c2);


//해체
let persons = {"name1":"홍길동", "age1":23};
let {name1,age1}=persons; //해체를 해줌
console.log(name1);
console.log(age1);



//해체
function myfunc2(person){
    const{name, age, phone}=person;
    console.log(name);
    console.log(age);
    console.log(phone);
}

myfunc2({name:"Tom", age:22, phone:"010-0000-0000"});