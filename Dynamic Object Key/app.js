const person = {
   name:'Jonh',
};
console.log(person.name);
person.age = 25;
console.log(person);


const items = {
   'featured-item':['item1,item2']
}
console.log(items['featured-item'])

let appState = 'loading';
appState ='error'

const keyName= 'computer'

const app = {
   [appState]:true,
}
app[keyName] ='apple'
console.log(app);

//Dynamic 

const state ={
   loading:true,
   name:'',
   job:'',
};
function updateState(key,value){
   state[key] =value
}
updateState('name','Jonh');
updateState('job','Developer');
updateState('product',[{name:'coca',code:'string'}]);

console.log(state);