console.log("프라미스 시작");

let promise = new Promise(function(resolve, reject){
    console.log("1111");
    resolve("100")
})
.then((result)=> {
    console.log("Result",result)
})

console.log(promise);