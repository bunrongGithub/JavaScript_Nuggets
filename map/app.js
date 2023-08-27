people=[
   {
      name: 'rong',
      age :21,
      position:'intern',
   },
   {
      name: 'jonh',
      age :34,
      position:'internship',
   },
   {
      name: 'smile',
      age :30,
      position:'new york',
   },
   {
      name: 'jack',
      age :44,
      position:'preyveng',
   }
];
// const getAge = (person) => person.age *2 ;
// const getName = (person) => person.name;

// const ages = people.map(getAge);
// const names = people.map(getName);
// console.log(names);
// console.log(ages);
const newPeople = people.map((itme) =>{
   return {
      firsName:itme.name.toUpperCase(),
      oldAge:itme.age,
   }
});
console.log(newPeople);


const newName = people.map((person)=> `<h2>${person.name}</h2>`);
const result = document.querySelector('.result');
result.innerHTML = newName;