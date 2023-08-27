//Sread Operator ...
// Allows and iterable to spread/exapand individually inside reciever
// Split into single items and copy them

const  udemy = 'udemy';
const letter = [...udemy];
console.log(letter);

const boys = ['jonh','petter','bob'];
const girls = ['susan','anna'];

const besfriend = 'arnold';

const friendsArray = [boys,girls,besfriend];
console.log(friendsArray);


const friends = [...boys,...girls,...besfriend];

console.log(friends);

//reference 

const newFriend = [...friends];
newFriend[0] = 'nancy';
console.log(friends);
console.log(newFriend);

//copy

console.log(newFriend);

//ES2018 - ES8 oBJECTS

const person = {name:'John',job:'developer'};

const newperson = {...person,city:'New York'};
console.log(person);
console.log(newperson);