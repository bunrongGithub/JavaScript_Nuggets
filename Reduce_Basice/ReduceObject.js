// //Reduce Object
// //cart example

// const cart = [
//    {
//       title:'Samsung Galaxy S7',
//       price:599.99,
//       amount:1,
//    },
//    {
//       title:'Google pixel',
//       price:499.99,
//       amount:2,
//    },
//    {
//       title:'Xiaomi Redmi Note 2',
//       price:899.99,
//       amount:4,
//    },
//    {
//       title:'Iphone 15 promax',
//       price:699.99,
//       amount:10,
//    },
// ];
// let totals = cart.reduce(
//    (total,cartItem)=>{
//       //console.log(cartItem);
//       const {amount,price} = cartItem;
//       //count items
//       total.totalItem += amount;
//       //count sum
//       total.cartTotal += amount *price;
//    return total;
// },
// {
//    totalItem:0,
//    cartTotal:0,
// });


// console.log(totals);

const url ="https://reqres.in/api/users?data?";


const fetchRepos = async () =>{
   const response = await fetch(url)
   const data = await response.json();
   if(Array.isArray(data)){
      const newdata = data.reduce((total,repos)=>{
         return total;
      },{});
      console.log(newdata);
   }else{
      console.log("data is not");
   }
};
fetchRepos();