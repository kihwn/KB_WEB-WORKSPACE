const myname = "혜원"
const promise = new Promise((resolve, reject) => {
    if (myname==="혜원") {
      resolve('resolved');
    } else {
      reject('rejected');
    }
  });
  
  promise
    .then((res) => {
     console.log("너의 이름은? ",myname);
      
    })
    .catch((error) => {
      console.error(error);
    });