let arr = [1,34,4,100,8,21,302,31];
arr.forEach((item, i)=>{ //매개변수가 두 개 오는 것이 핵심. 두 번째 매개변수는 인덱스!
    console.log(item, i);
 }) ;


 //이전 배열의 값을 가져와서 가공하여 출력하는 것.
 let arr2 = arr.map((item,i)=> item *2);
 console.log(arr2);