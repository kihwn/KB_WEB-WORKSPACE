<!--   컴포넌트임 -->
<template lang="">
    <div>
        <form action="/action_page.php" class="was-validated">
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Userid:</label>
                <!-- 로그인 함수를 위해 아래아랫줄 v-model 줄 추가-->
                <input type="text" class="form-control"
                 v-model="userInfo.userid"
                 id="uname" placeholder="Enter username" name="uname" required>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" 
                v-model="userInfo.password"
                class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                <label class="form-check-label" for="myCheck">I agree on blabla.</label>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Check this checkbox to continue.</div>
            </div>
            <button type="button" class="btn btn-primary" v-on:click="logon">Submit</button>
        </form>
        </div>
</template>
<script>
//ref ==>객체도 되고 원시타입(기본타입)
import {ref, reactive} from 'vue';
import{useRouter, useRoute} from 'vue-router';
//페이지 이동은 useRouter 객체
//그동안 이동했던 페이지 정보는 useRoute가 갖고 있다.
export default {
    setup(){
        //페이지 이동을 하려면 router를 사용해야 하고, 
        //이동하고 있는 라우팅 정보를 저장하는 객체는 route 객체가 있다.
        
        const router = useRouter(); //라우터 안에는 push함수가 있음. => 이동할 페이지 정보를 
        const route = useRoute(); //전달할 정보는 to=/about는 route가 가져온다. http://localhost:5173/logon?to=/about 중 to=/about는 route가 가져옴
        //SPA(Single Page Application), loacation.href 나 <a></a> 태그를 가급적 쓰지 않음. 
        const userInfo =  reactive({userid:"", password:"", username:""});
        //백앤드서버에서 데이터를 원래는 가져와야 한다
        const userList = [
            {userid:'test', password:'1234', username:'뇽뇽'},
            {userid:'test2', password:'1235', username:'깜깜'},
            {userid:'test3', password:'1236', username:'꼬꼬'},
            {userid:'test4', password:'1237', username:'이도'},
            {userid:'test5', password:'1238', username:'벼리'}
        ]
        const logon = () =>{
            let user = userList.find(e=>e.userid == userInfo.userid);
            sessionStorage.setItem("userid","");
            sessionStorage.setItem("username","");
            //로그아웃 시 세션 해제. 
            if (user == null){
                alert("해당하는 아이디가 없습니다.")
                return; //함수 종료
            }
            if (user.password!=userInfo.password){
                alert("패스워드가 일치하지 않습니다.")
                return;
            }
            
            alert("로그온 성공!")
            //로그온 정보는 세션, 쿠키, 로컬 스토리지에 저장가능 
            //세션은 서버에 저장,
            //쿠키와 로컬 스토리지는 클라이언트에 저장됨. 
            //쿠키는 보안문제 때문에 html5에서 로컬 스토리지를 만든다. 

            sessionStorage.setItem("userid",user.userid);
            sessionStorage.setItem("username",user.username);
            //파라미터나 쿼리는 route에 있음.
            let path = route.query.to?route.query.to:"/"; //이동할 경로에 대한 정보 등등 ...
            
        
            console.log(path);
            router.push({path:path});
        }
    
        //반드시 리턴시켜야 템플릿에서 사용이 가능하다.
        return {userInfo, userList,logon};
    }
}
</script>
<style lang="">
    
</style>