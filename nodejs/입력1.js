const readline = require('readline');

// 인터페이스를 생성.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//r1은 프로미스를 return하게 됨.
rl.question('이름이 뭐예요? ', (answer) => {
  console.log(`안녕하세요, ${answer}!`);
  
  // 인터페이스를 닫습니다.
  rl.close();
});
