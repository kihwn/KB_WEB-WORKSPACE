var express = require('express');
var app = express();  //서버 객체


//http://127.0.0.1:3000/test 로 검색하면 이것이 받고 test가 없으면
//아~래에서 처리함. 
app.get("/test", (request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Get</h1>');
});

app.get("/test2", (request,response)=>{
    //response.writeHead(200,{'Content-Type':'text/html'});
    //response.end('<h1>Get</h1>');
    let data=[];
    for (i=1; i<=10; i++){
        data.push(`data: ${i}`);
    }
    response.send(data); //end 처리를 따로 안해도 send로 보내면 stream을 정리해줌.
});

app.post("/test", (request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Post</h1>');
});

//클라이언트로부터 요청이 오면 모든 응답을 처리한다.
//app에는 함수가 get,post, use 3개가 있다.
//get은 get 방식처리만,
//post는 post 방식 처리만
//use는 ㅎet, post 둘 다 처리한다.


//특정 url X - 에러 처리등 특정 요건에 알맞지 않은 애들을 모두 처리.
//따라서 맨 밑에 넣어야 함. 이게 위에서 받으면 모든 처리를 얘가 받게 됨.
app.use((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Express</h1>');

})

app.listen(3000, ()=>{
    console.log("server start in http://127.0.0.1:3000");
})