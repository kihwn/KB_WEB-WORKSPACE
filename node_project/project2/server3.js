const http = require("http");
const url = require("url");
const fs = require("fs"); //파일라이브러리(html 파일을 읽어서 보내는 것)
//http://127.0.0.1:3000/test?name=Tom&age=12
//test : pathname
//?name=Tom*age = 12  : 파라미터
//createServer - 서버소켓(통신을 할 대상)을 생성한다.
//클라이언트로부터 접속 요청이 오면 매개변수로 전달한 함수를 호출한다.


//아래 if문을 대체해줄 것임.
let callmethods=[
    // /add가 오면 => add함수 호출
    // /sub가 오면 => sub함수 호출
    {"key":"/add", "func":add,method:["GET"]},
    {"key":"/sub","func":sub,method:["GET"]},
    {"key":"/gugu","func":gugu,method:["GET"]},
    {"key":"/info","func":getUserInfo,method:["POST"]},
    {"key":"/input","func":input, method:["GET"]},
]



//server2의 함수를 정리함.
let server = http.createServer((request, response)=>{

    //접속 요청이 오면 이 함수가 호출된다.
    console.log("connect"); //요청 방법

    let pathname = url.parse(request.url, true).pathname;
    let method = request.method;

    let result = callmethods.filter((call)=>call.key==pathname && method==call.method[0]);
    if(result.length>0){
        result[0].func(request,response);
    }
    else{
        response.writeHead(404,{'Content-Type':"test/html"});
        response.end("<h1>It's not exists</h1>");
    }
    //if (method=="GET"&& pathname=="/add")
    //    add(request,response);
    //else{
        //브라우저에서 응답을 한다.
    //    response.writeHead(200,{'Content-Type':"test/html"});
    //    response.end("<h1>Hello nodejs</h1>");
    //}
   
});

//서버가 listen 함수를 호출해야 한다. 어떤 포트에서 기다릴지를 알려준다. 포트 함수는 변경 가능.
//매개변수 뒤에 있는 함수는 바꾸지 못함. createServer 만든 사람이 
//꼭 request와 response를 매개변수로 사용하는 것으로 결정함.
server.listen(3000,()=>{
    console.log("server start http://127.0.0.1:3000");
});

//http://127.0.0.1:3000/add?x=5&y=7
function add(request, response){
    //쿼리가 json 객체 {"x":5, "y":6}
    let query = url.parse(request.url, true).query;
    let x = parseInt(query.x);
    let y = parseInt(query.y);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(`${x}+${y}=${x+y}`);
}
//http://127.0.0.1:3000/sub?x=5&y=7
function sub(request, response){
    //쿼리가 json 객체 {"x":5, "y":6}
    let query = url.parse(request.url, true).query;
    let x = parseInt(query.x);
    let y = parseInt(query.y);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(`${x}-${y}=${x-y}`);
}

//http://127.0.0.1:3000/gugu?dan=6
function gugu(request,response){
    let query = url.parse(request.url, true).query;
    let dan = parseInt(query.dan);

    let result = "";
    for (i=1; i<=9; i++){
        result+= `${dan}*${i} = ${dan*i}<br/>`;
    }
    
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(result);
}

function getUserInfo(request, response){
    //post 방식은 request.url 은 헤더 정보.
    //그래서 POST일 때는 request.url에 정보를 보내지 않는다. 

    let body="";
    //클라이언트가 정보를 body에 담아보내는 동안 'data'라는 이벤트 발생 시 계속
    //콜백함수가 호출된다.

    request.on('data',(data)=>{
        body+=data;
    });

    //데이터가 모두 수신되면
    request.on('end',()=>{
        let result = new URLSearchParams(body); //파싱끝
        //result -> JSON과 유사한 유사한 객체 result.get("key값")
        let username = result.get("username");
        let age = result.get("age");
        let address = result.get("address");

        //현재는 한글 깨짐

        let msg = `${username}'s age is ${age}, and address is ${address}.`;
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(msg);
        
    })
}

//http://127.0.0.1:3000/input
//npm install ejs
let ejs = require("ejs");
function input(request, response){
    //파일을 동기로 읽을 수 있고 비동기로 읽을 수 있는데
    //이번엔 동기로 읽기 (그래서 readFileSync로 되어있고, 그냥 readFile로 되어있으면 비동기임.)
    var fileData = fs.readFileSync("./html/input.html","utf8");
    let data = ejs.render(fileData,{
        "title":"EJS engine",
        "writer":["hyewon","woojunging","jenny","krystal"],
        "scores":[
            {"name":"A", "kor":100, "mat":100},
            {"name":"B", "kor":98, "mat":97},
            {"name":"C", "kor":95, "mat":82},
            {"name":"D", "kor":100, "mat":70}
        ]});
    response.writeHead(200,{'Content-Type':'text/html'}); 
    //ejs 엔진의 역할 : javascript와 html을 합쳐서 새로운 html 문서를 만드는 것.(렌더링)
    //그것이 동적인 웹페이지(톰캣의 역할을 해줌).
    //서버 run 해보면 input html 파일속 <h1><%=title%></h1>가 <h1>EJS engine</h1>으로 렌더링 되어 나옴.
    response.end(data);
}
