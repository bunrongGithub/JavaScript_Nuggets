// javascript Nuggets

//Fetch API - browser api and for http (ajax) requests
//Defualt - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project';

// fetch(url)
//    .then((respone) =>respone.json())
//    .then(data =>console.log(data))
//    .catch((err)=>console.log(err))

const getTour = async () =>{
   try {
      const resp = await fetch(url)
      if(!resp.ok){
         const msg = `There was as error "${resp.status} ${resp.statusText}"`
         throw new Error(msg);
      }
      const tours = await resp.json()
      console.log(tours)
   } catch (error) {
      console.log(error);
   }
}
const btn = document.querySelector('.btn');
btn.addEventListener('click',getTour)