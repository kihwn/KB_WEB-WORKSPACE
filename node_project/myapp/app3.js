var express = require('express');
var app = express();  //서버 객체 생성
 



//예전엔 body-parser라는 모듈을 사용함 . => express로 기본값으로 들어간다.
// x-www-form-urlencoded : form 태그에서 method를 post로 보낼 때
// form-data : form 태그에서 method를 POST + enctype = "multipart/form-data"
//              파일 전송시

//json으로 보내는 방식(fetch나 axios 사용시)

//설정 => bodyparser 미들웨어를 거치게
app.use(express.urlencoded({extended:true})); //x-www-fom-urlencoded
//app.use(express.json({extended:true})); //json으로 받고 싶으면 이것이 있어야 함.
//이 설정이 있어야 post가 처리해주며, get은 query를 이용하는 것과 달리
//post는 body로 옴.
app.post("/add",function(request,response,next){
    x = request.body.x; //request.query.x라고 하면 알아서 파싱되며 x가 담아져옴.
    y = request.body.y;
    result = parseInt(x) + parseInt(y);
    response.send(`${x} + ${y} = ${result} `)
    
})


//http://127.0.0.1:3000/add?x=5&y=7
app.get("/add",function(request,response,next){
    x = request.query.x; //request.query.x라고 하면 알아서 파싱되며 x가 담아져옴.
    y = request.query.y;
    result = parseInt(x) + parseInt(y);
    response.send(`${x} + ${y} = ${result} `)
    //send나 end가 있으면 다음 내용을 추가로 요청할 수 없음. 연결 끝났다는 뜻.
})

//get 방식2. param을 활용한 get 방식의 표준.
//http://127.0.0.1:3000/add2/5/7
app.get("/add2/:x/:y",function(request,response,next){
    x = request.params.x; //request.query.x라고 하면 알아서 파싱되며 x가 담아져옴.
    y = request.params.y;
    result = parseInt(x) + parseInt(y);
    response.send(`${x} + ${y} = ${result} `)
    //send나 end가 있으면 다음 내용을 추가로 요청할 수 없음. 연결 끝났다는 뜻.
})



app.use((request,response, next)=>{
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end("<h1>express</h1>")
})

app.listen(3000,()=>{
    console.log("server start  http://127.0.0.1:3000");
})
