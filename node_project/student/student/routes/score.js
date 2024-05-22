let score =[
    {id:1, "name":"혜원", "kor":90, "eng":80, "mat":70},
    {id:2, "name":"깜꼬", "kor":80, "eng":80, "mat":60}
]

var express = require('express');
var router = express.Router();

// /score/list
router.get("/list",(req,res)=>{
    //views/score/score_list.ejs파일을 불러온다
    res.render("score/score_list",{list:score});
})

router.get("/view/:id",(req,res)=>{
    let id = req.params.id;
    //배열에서 해당 id가 존재하는지? id값을 갖는 요소의 배열을
    //반환 받는다
    let result = score.filter((item)=>item.id==id);

    //첫 번째 거 하나만 전송한다
    res.render("score/score_view",{view:result[0]});
})

router.get("/write",(req,res)=>{
    //페이지 이동용으로만 사용한다.
    res.render("score/score_write");
})

router.post("/save",(req,res)=>{
    //파라미터를 받는다
    let id = score[score.length-1].id+1;
    let name = req.body.name;
    let kor = req.body.kor;
    let eng = req.body.eng;
    let mat = req.body.mat;
    //let sum = parseInt(kor)+parseInt(eng)+parseInt(mat);


    //등록 후에는 ejs 파일 전송이 아니고 다른 페이지로 이동한다.
    score.push({"id":id, "name":name, "kor":kor, "eng":eng, "mat":mat});
    res.redirect("/score/list");
    //무조건 redirect로 해야 함. 언어불문. send X.
})
module.exports = router;