var express = require('express');
var router = express.Router();

const members=[ 
//members는 상수인데 그 안에 값을 추가할 수 있음. members 자체는 바뀌지 않음. stack에 저장된 members의 주소는 그대로 있음
//즉 객체참조자에게 const를 붙인 형태. 따라서 members에 새로운 객체 배열을 정의할 순 없음. 
//그러나 해당 위치에 만들어진 객체에 값 추가는 가능함. 즉, 그 안에 대상이 바뀌는 것은 상관 없음.
    {"id":"1", username:"깜꼬",userid:"user01", "password":"1234"},
    {"id":"2", username:"뇽뇽",userid:"user02", "password":"1234"}
];

//로그온 (1. 로그온 페이지로 이동  2. 디비에 존재하는지 확인)
router.get('/logon', function(req, res, next) {
  res.render("member/logon");
});

router.get('/write', function(req, res, next) {
    res.render("member/write");
  });

router.post('/logon',function(req,res,next){
    const{userid, password} = req.body; //destruction(해체)
    //request 객체의 body -> JSON 객체
    //let userid = req.body.userid;
    let result = members.filter((m)=>{ return m.userid==userid});
    if (result.length==0){
        res.send({"result":"FAIL","msg":"해당 아이디가 없습니다"});
        return;
        }
    
    if(result[0].password!=password){
        res.send({"result":"FAIL", "msg":"패스워드가 일치하지 않습니다."});
        return;
    }

    res.send({"result":"OK","msg":"로그온 성공"});
    
});

router.post('/write',function(req,res,next){
    const{userid, password,username} = req.body; //destruction(해체)
    console.log(userid, req.body);
    let id = members[members.length-1]+1;
    members.push({id:id, userid:userid, username:username,password:password});
    res.send({"result":"OK","msg":"회원 가입 성공"})
    
});

module.exports = router;
