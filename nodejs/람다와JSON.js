//람다와JSON.js

let scores = [
    {id:1, name:"김혜원",kor:100, eng:98, mat:90},
    {id:2, name:"김우정",kor:98,eng:100,mat:100},
    {id:3, name:"피카츄",kor:90,eng:80,mat:70},
    {id:4, name:"신짱구",kor:70,eng:85,mat:80}
]

function output(){
    //scores는 객체 배열을 전달, forEah에는 배열의 요소 하나
    //Number, String : (s)는 현재는 JSON 객체
    scores.forEach( (s)=>{
        console.log(`${s.name} ${s.kor}`);
    })
}

function process(){
    scores.forEach( (s)=>{
        s.total = s.kor+s.eng+s.mat;
        //s["total"] = s["kor"]+s["eng"]+s["mat"]
        s.avg = (s.total/3).toFixed(2);  // 정수형/정수형 =  실수형 ---> 소수점 이하 두번째 자리까지.
        //let highAvg = scores.filter(score=>score.avg>=80);

        //highAvg.forEach((s)=>{console.log(`${s.name} ${s.highAvg}`)});
    })
}

function search(limit=80){ //default값이 80
    let temp = scores.filter(s=>s.avg>=limit);
    temp.forEach(s=>{;
        console.log(`${s.name} ${s.total} ${s.avg}`)
    })
}

function compare(a,b){
    if (a.total>b.total){
        return 1;
    }
    else if (a.total===b.total){
        return0;
    }
    else{
        return -1;
    }
}

function sort(){
    //scores.sort(compare);
    scores.sort((a,b)=> a.total-b.total);
    console.log(scores);

}

//output();
process();
console.log("------------");
search(80);
sort();