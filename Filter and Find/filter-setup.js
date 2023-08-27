const people =[
   {name: 'bob',age:21,position:'developer'},
   {name:'peter',age:25,position:'designer'},
   {name:'susy',age:30,position:'the boss'},
   {name:'anna',age:43,position:'intern'},
];
const fruits =['banana','apple','lemon'];
/*const youngPeople = people.filter((person)=>{
   return person.age > 30;
});
console.log(youngPeople);*/
const developer = people.filter((person)=> person.position === 'developer');
console.log(developer);
const seniorDevs = people.filter((item)=> item.position === 'senior dev')
console.log(seniorDevs);
//find
const peter = people.find((person)=> person.name === 'peter');
console.log(peter);

const fruit = fruits.find((item) => item === 'lemon');
console.log(fruit);