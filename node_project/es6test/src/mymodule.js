
//mymodule.js
//babel이나 타입스크립트의 경우 변수에 대해서 엄격하게 체크
//변수를 정의하지 않고 사용한다는 것이 디버깅에 지대한 영향을 미친다.
//모던 스크립트에 제약을 가해서 사용한다
//함수를 다른 모듈(파일)에서 사용하려면 export 시켜야 한다.

//함수를 다른 모듈(파일)에서 사용하려면 export 시켜야 한다.
export function add(x,y){
    return x+y;
}

export function sigma(limit=10){
    let sum=0; 
    let i =0;
    for (i=1; i<=limit; i++){
        sum+=i;
    }
    return sum;
}
