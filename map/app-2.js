const menu = [
   {
      name: 'sljfeif',
      catagory: 'dinner',
   },
   {
      name: 'sljfeif',
      catagory: 'luch',
   },
   {
      name: 'sljfeif',
      catagory: 'Breakfast',
   },
   {
      name: 'sljfeif',
      catagory: 'fieio',
   },
];
const newMenu =['all',...new Set(menu.map((item) => item.catagory))];
console.log(newMenu);
const result = document.querySelector('.div');
result.innerHTML =newMenu.map((catagory)=>{
   return `<button>${catagory}</button>`
}).join('');