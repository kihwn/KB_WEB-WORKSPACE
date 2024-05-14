let arr = [1,34,4,100,8,21,302,31];
arr.forEach((item, i)=>{ //매개변수가 두 개 오는 것이 핵심. 두 번째 매개변수는 인덱스!
    console.log(item, i);
 }) ;


 //이전 배열의 값을 가져와서 가공하여 출력하는 것.
 let arr2 = arr.map((item,i)=> item *2);
 console.log(arr2);

 arr=[
    [1,2,3],
    [3,4,5],
    [10,20,30,40],
    [100,200,300,400,500]
 ];

 arr.forEach((item, i)=>{
    //item->1차원 배열로 전달된다.
    console.log(i,item);
 })

 arr.forEach((item,i)=>{
    item.forEach((a,ii)=>{
        console.log(i, ii, a);
    })
 })

 let result = arr.map((item,i)=>{
    item.map((a,ii)=>{
        console.log(i, ii, a);
        return a*2;
    })
    return item; //return이 반드시 있어야 함. 그래야 배열 형태로 들어오게 됨. 
 })

 console.log(result);


 //filter와 find 함수 차이점
 arr = [1,34,4,100,8,21,302,31];
 result = arr.filter(x=> x%2==0); //짝수만
 console.log(result);
 result = arr.find(x=> x>305); //짝수만. find는 만족하는 첫 번째 값 하나만 옴. 
 console.log(result); //find 조건에 만족하는 값이 없으면 undefined 반환.

 let sum = arr.reduce((prev, item)=>{
    //prev - 이전에 반환된 값. 처음에는 0으로 세팅되어있음. 지정하는 방법도 있음.
    //함수 마지막에 },지정값);을 하면 됨.
    //item - 현재 배열의 요소
    return prev+item; //이 값이 다시 prev에 할당되어서 옴. 
 });

 arr = [
    [1],
    [1,2,3],
    [[4,5,6],[7,8,9],[10,11,12]]
 ];

 //문자열 처리하기
 let sentence = "white black grey purple";
 //문자 배열로 나누자
 let words = sentence.split(" ");
 console.log(words);

 //문자 배열을 하나로 묶기 join 함수
 console.log (words.join(",")); // ,로 모든 단어를 묶는다.



 //문제1. 단어의 길이가 5글자 이상인 것만 추출하기
let overFive = words.filter(x=> x.length>=5);
console.log(overFive);

 //문제2. 모든 단어를 대문자로 바꾸기
 //내가 푼 것
 function printUpperCaseWords(wordsArray) {
    // 배열의 각 요소를 대문자로 바꾸고 출력
    wordsArray.forEach(word => {
        console.log(word.toUpperCase());
    });
}
printUpperCaseWords(words);

//선생님께서 풀어주신 것
console.log(words.map(s=>s.toUpperCase));
 //문제3. 단어의 길이가 5글자 미만만 대문자로 바꾸기
//선생님께서 풀어주신 것.
result = words.filter(w=>w.length>=5)
                .map(w=>w.toUpperCase())
console.log(result);



 //문제4. 단어 중에 r을 포함한 단어만 추출하기
//let haveR = words.forEach(x)

//선생님께서 풀어주신 것.
console.log( words.filter(w=> w.includes("r")));