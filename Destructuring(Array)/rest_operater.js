//Array
const fruits = ['apple','orange','lemon','banana'];

const [first,second,...restOfTheFruits] = fruits;

console.log(first,second,restOfTheFruits);

const specificFruit = restOfTheFruits.find((item)=>item === 'lemon');

console.log(specificFruit);

//This Object
const person = {name:'jonh',lastName:'smith',job:'developer'};
const {job,...rest} = person;

console.log(job,rest);

const getAverage = (name,...scores) => {
   console.log(name)
   console.log(scores);
   const average = scores.reduce(
      (total,item)=>{return total += item},0)/scores.length;
   console.log(average);
}

const testScore = [10,23,45,67];
getAverage(person.name,...testScore);