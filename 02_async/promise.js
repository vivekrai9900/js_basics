const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'vivek', password:'1234'})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})


promise.then(function(user){
    console.log(user)

}).catch(function(err){
    console.log(err)
})

//using async await method

// async function getAllusers(){
//      try {
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')

//        const data =  await response.json()
//         console.log(data)
  
//      } catch (error) {

//         console.log("e:",error);
        
//      }
// }

// getAllusers()

 
//using fetch method 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
}).catch((err)=>console.log(err))