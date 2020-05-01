let getPromise1 = new Promise((resolve) => {
  resolve(1)
 
 })
let getPromise2 = new Promise((resolve) => {
  resolve(2)
})

const all = (promise1, promise2) => {
    
let counter = 0
let data = []

while(counter < 2){
  promise1.then((value)=> data.push(value), counter++)
  promise2.then((value)=> data.push(value), counter++) 
} 
return new Promise(resolve=>{
    resolve(data)
})



}
all(getPromise1, getPromise2).then(data => console.log(data))
