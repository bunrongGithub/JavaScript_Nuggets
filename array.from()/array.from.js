//Array.from -NOT ON PROTOTYPE
//from -return Array object from an abject
// with a length property or an iterable object 
// from -turns array-linke/ish into array - string,nodeList,set

const udemy ='udemy';

//console.log(Array.from(udemy));
//output 'u,d,e,m.y'

const text = document.querySelectorAll('.text');
//console.log(text);
//find when item equal to 'person'
const newText = Array.from(text).find((item)=>item.textContent === 'person');
//console.log(newText);

//create length of items and use the callback function
//when we create the lenght:120 , every items is undefined
//we use the callback function to create the length of items
//we don't care about the first argument
const items = Array.from({length:120},(_,index)=>{
   return index;
});
const itemsPerPage = 14;
const pages = Math.ceil( items.length / itemsPerPage); // 120/14 == 8.57  we always to use the Math.ceil function to calculate 8.57 === 9 

const newIItems = Array.from({length:pages},(_,index)=>{
   const start = index * itemsPerPage; 
   const tempItems = items.slice(start,start + itemsPerPage);
   return tempItems;
})
console.log(newIItems);
//look at the console in browser