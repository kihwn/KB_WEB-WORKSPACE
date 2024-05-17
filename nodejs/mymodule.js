
function add(x,y){
    return x+y;
}

function sigma(limit=10){
    sum=0;
    for (i=1; i<=limit; i++){
        sum+=i;
    }

    return sum;
}


//함수를 다른 모듈(ㅠㅏ일)에서 사용하려면 export 시켜야 한다.
export function add(x,y){
    return x+y;
}

export function sigma(limit=10){
    sum=0; 
    for (i=1; i<=limit; i++){
        sum+=i;
    }
    return sum;
}

//이전문법
module.exports={add,sigma};