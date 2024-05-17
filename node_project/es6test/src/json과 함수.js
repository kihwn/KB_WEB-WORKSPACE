//JSON은 "키":"값", 굳이 값이 진짜 값만 저장하는 것이 아니라
// 함수도 저장이 가능하다. 단, 함수 안에서 json 객체 내의 변수에 접근하려면
//this가 필수, 따라서 JSON 내부에 함수 선언 시 화살표 함수 사용 불가
//화살표 함수에선 this를 사용할 수 없기 때문.

let score = {
    name:"혜원", age:25, address: "서울시",
    "setValue":function(name, age,addr){
        this.name = name;
        this.age = age;
        this.address = addr;
    },
    "output":function(){
        console.log(`${this.name} ${this.age} ${this.addr}`);
    }
}
score.output();
score.setValue("임꺽정",33,"수원시");
score.output();

score.getName=function(){return this.name;}
console.log(score.getName());