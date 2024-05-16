const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//r1은 프로미스를 return하게 됨.
//정수 2개를 입력받아 더한 결과를 알고 싶다. 
rl.question('정수', (num1) => {
  num1 = parseInt(num1);
    r1.question('정수',(num2)=> {
        num2 = parseInt(num2);
        console.log("합산: ",num1+num2);
        rl.close();
    }); //값 두개를 받기 위해 두 번째 값도 함수 내부에서 받아야 함.  
  // 인터페이스를 닫습니다.
  
});