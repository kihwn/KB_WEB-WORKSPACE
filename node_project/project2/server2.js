const http = require("http");
const url = require("url");
//http://127.0.0.1:3000/test?name=Tom&age=12
//test : pathname
//?name=Tom*age = 12  : 파라미터
//createServer - 서버소켓(통신을 할 대상)을 생성한다.
//클라이언트로부터 접속 요청이 오면 매개변수로 전달한 함수를 호출한다.

let server = http.createServer((request, response)=>{

    //접속 상대방에 대한 정보가 모두 온다
    //console.log(request.headers); 디버깅할 때 주석 제거.
    console.log(request.method); //요청 방법
    
    var uri = request.url; //http://127.0.0.1:3000/test?name=Tom&age=12
    console.log("uri",uri);

    var pathname = url.parse(uri,true).pathname; // ?앞에까지가 path임/test

    if(request.method === "GET"&& pathname==="/test"){
        response.writeHead(200,{'Content-Type':'text/html'});
        var query = url.parse(uri, true).query; // ? 뒤에가 쿼리이다
        console.log(query);
        //문자열 JSON => string으로 전환
        response.end(JSON.stringify(query));
        

        return;  //함수를 종료한다.
    }

    //접속 요청이 오면 이 함수가 호출된다. 
    console.log("connect");

    //브라우저에서 응답을 한다.
    response.writeHead(200,{'Content-Type':"text/html"});
    response.end("<h1>Hello nodejs</h1>")
});

//서버가 listen 함수를 호출해야 한다. 어떤 포트에서 기다릴지를 알려준다. 포트 함수는 변경 가능.
//매개변수 뒤에 있는 함수는 바꾸지 못함. createServer 만든 사람이 
//꼭 request와 response를 매개변수로 사용하는 것으로 결정함.
server.listen(3000,()=>{
    console.log("server start http://127.0.0.1:3000");
});