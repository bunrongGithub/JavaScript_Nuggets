const example = async ()=>{
   return 'hello world';
}

// async function allways returns a promise 
console.log(example());

async function someFunc (){
   const result = await example();
   console.log(result);
}
// await wait till promise is settled

someFunc();
const users = [
   {id:1,name:'jonh'},
   {id:2,name:'susan'},
   {id:3,name:'anna'},
];

const articles = [
   {userId:1,articles:['one', 'two', 'three']},
   {userId:2,articles:['four', 'five', 'six']},
   {userId:3,articles:['seven', 'eight', 'nine']},
];

getUser('susan')
   .then((user) => getArticles(user.id))
   .then((articles) => console.log(articles))
   .catch((err) => console.log(err));


const getData = async () =>{
   try {
      const user = await getUser('anna');
      const articles = await getArticles(user.id);
      console.log(articles);
   } catch (error) {
      console.log(error);
   }
   
}
getData();
function getUser(name){
   return new Promise((resolve,reject)=>{
      const user = users.find((user)=>user.name === name);
      if(user){
         return resolve(user);
      }else{
         reject(`No such user with name:${name}`);
      }
   })
}

function getArticles(userId){
   return new Promise((resolve,reject)=>{
      const userArticles = articles.find((user)=>user.userId === userId);
      if(userArticles){
         return resolve(userArticles.articles);
      }else{
         return reject(`Wrong ID`);
      }
   })
}