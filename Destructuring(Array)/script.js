const bob={
   first:'bob',
   last:'sanders',
   city:'chicago',
   siblings:{
      sister:'jane'
   },
};

const last= 'some value';

const {first ,last:shakAndBake,city,zip,siblings:{sister:favoriteSibling}} = bob;

console.log(first,last,city,shakAndBake,favoriteSibling);

function printPerson({first,last,city,siblings:{sister}}){
   // const {first,last} = person;

   console.log(first,last,city,sister);
}

printPerson(bob);