//crud - create read update delete의 약자
//방명록 -> 만들고 읽고 수정하고 삭제하는 것이 한 세트. -> 이거 하나당 하나의 json 파일을 만들면 됨.
// /guestbook/list  - 목록화면
// /guestbook/view/1 - 상세화면
// /guestbook/write  - 글쓰기 화면으로 이동
// /guestbook/save   - 실제 디비에 저장
// /guestbook/modify - 수정화면으로 이동
// /guestbook/save   - 수정완료
// /guestbook/delete - 삭제


//data를 json 배열로 만들다.
let guestbooks = [
    {id:1, "title":"놀러옴","writer":"김혜원"},
    {id:2, "title":"놀러옴2","writer":"이휘정"},
    {id:3, "title":"놀러옴3","writer":"이유진"},
    {id:4, "title":"놀러옴4","writer":"뇽따"},
    {id:5, "title":"놀러옴5","writer":"깜꼬"},
]
var express = require('express');
var router = express.Router();

// /guestbook/list
router.get("/list",(req,res)=>{
    //views/guestbook/guestbook_list.ejs파일을 불러온다
    res.render("guestbook/guestbook_list",{list:guestbooks});
})

router.get("/view/:id",(req,res)=>{
    let id = req.params.id;
    //배열에서 해당 id가 존재하는지? id값을 갖는 요소의 배열을
    //반환 받는다
    let result = guestbooks.filter((item)=>item.id==id);

    //첫 번째 거 하나만 전송한다
    res.render("guestbook/guestbook_view",{view:result[0]});
})

router.get("/write",(req,res)=>{
    //페이지 이동용으로만 사용한다.
    res.render("guestbook/guestbook_write");
})


router.post("/save",(req,res)=>{
    //파라미터를 받는다
    let id = guestbooks[guestbooks.length-1].id+1;
    let title = req.body.title;
    let writer = req.body.writer;

    //등록 후에는 ejs 파일 전송이 아니고 다른 페이지로 이동한다.
    guestbooks.push({"id":id, "title":title, "writer":writer});
    res.redirect("/guestbook/list");
    //무조건 redirect로 해야 함. 언어불문. send X.
})
module.exports = router;