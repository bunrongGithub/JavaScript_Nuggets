console.log('height',window.innerHeight);
console.log('width',window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click',()=>{
   const deminsions = box.getBoundingClientRect();
   console.log(deminsions);
})