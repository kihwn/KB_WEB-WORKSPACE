var express = require('express');
var app = express();  //서버 객체 생성

app.get("/a",function(request,response,next){
    request.a = "추가필드";
    next(); //다음 미들웨어 호출
    //send나 end가 있으면 다음 내용을 추가로 요청할 수 없음. 연결 끝났다는 뜻.
})

app.get("/a",function(request,response,next){
    request.b = "추가필드b";
    next(); //다음 미들웨어 호출
    //send나 end가 있으면 다음 내용을 추가로 요청할 수 없음. 연결 끝났다는 뜻.
})

app.get("/a",function(request,response,next){
    request.c = "추가필드c";
    response.send(` ${request.a} ${request.b} ${request.c}`)
    //send나 end가 있으면 다음 내용을 추가로 요청할 수 없음. 연결 끝났다는 뜻.
})


app.use((request,response, next)=>{
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end("<h1>express</h1>")
})

app.listen(3000,()=>{
    console.log("server start  http://127.0.0.1:3000");
})
