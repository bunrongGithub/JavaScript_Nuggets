/*console.log(new Date());
//Date.now()
console.log(Date.now());
//new Date().getTime()
console.log(new Date().getTime());

setTimeout(()=>{
   console.log(Date.now());
},2000);
//create id's in learning apps
let people = [];
people = [...people,{id:Date.now(),name:'petter'}];
setTimeout(()=>{
   people = [...people, { id:Date.now(), name:'petter'}];
   console.log(people);
},1000)

console.log(new Date(1692685790727));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());*/


const firstDate = new Date();
const secondDate = new Date(2023,8,22);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(Date.now(firstDate));
console.log(Date.now(secondValue));

const timeDifference = secondValue - firstValue;

console.log(timeDifference);

const minutes = timeDifference / (1000 * 60);

console.log(minutes);

const hour = timeDifference / (1000 * 60 * 60);
console.log(hour);

const days = timeDifference/ (1000 * 60 * 60 * 24);
console.log(days)

