//1~n까지 합계를 구하는 동기함수를 만들고 이를 비동기 함수로 바꿔보자

async function sigma(limit){ //동기 함수를 비동기 함수처럼!
    sum=0;
    for (i=1; i<=limit; i++){
        sum+=i;
    }
    return sum;
}

//비동기로 바꿔보자

limit = 5;
let pro = new Promise(function(resolve,reject){
    //제작 코드 시작
    if (limit<10)
        reject("10보다 큰 수를 주세요."); //에러메세지는 reject로 줘야 catch 구문으로 감.
    sum=0;
    for (i=1; i<=limit; i++){
        sum+=i;
    }
    resolve(sum); //return 사용 못함. 
    //제작 코드 종료

}) //소비코드
.then((result)=>{
    console.log("결과는 ",result);
})
.catch((error)=>{
    console.log(error);
})


/*  프라미스란 동기식 처리를 쉽게 비동기식 처리로 바꿀 수 있는 클래스.
    let promise = new Promise( callback(resolve, reject){});
    리턴받은 값은 Promise 객체 주소값이다.
*/


sigma(100)
.then(result=>console.log(result)); // 이걸 덧붙여줘야 함.


//await 명령어를 사용하면 Promise 객체가 작업을 완료하기를 기다린다.
//
/*let a = await sigma(1000);
console.log(a);
*/
// 에러 발생 : SyntaxError: await is only valid in async functions and the top level bodies of modules
// async 함수내에서만 가능. 함수 밖에서는 사용 불가.

async function main(){
    let a = await sigma(1000);
    console.log(a);
}

main();
