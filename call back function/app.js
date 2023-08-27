function makeUppercase(value){
   console.log(value.toUpperCase());
}
//makeUppercase('petter');

function reverseString(value){
   console.log(value.split('').reverse().join(''));
}


function handleName(name,cd){
   const fullName = `${name} smith`
   cd(fullName);
}
handleName('petter',makeUppercase)
handleName('petter',reverseString);

handleName ('susan' , (value) => console.log(value));
