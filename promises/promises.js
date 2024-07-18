const value = 2;
const promises =new Promise((resolve,reject) =>{
   const random = Math.floor(Math.random() * 3);
   console.log(random);
   const mudelo = 0;
   if(random % value === mudelo){
      resolve('you gussed correctly');
   }else{
      reject('there was a problem');
   }
});

promises.then((data)=>console.log(data)).catch((err)=>console.log(err));
console.log(promises);