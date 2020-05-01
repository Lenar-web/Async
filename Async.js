 let getPromise1 = new Promise((resolve) => {
    resolve(1)
 })
let getPromise2 = new Promise((resolve) => {
  resolve(2)
})

const all = (promise1, promise2) => {
  let counter = 0

  let upCounter = (prom) => {
    prom.then(value => value) && counter++
  }
  upCounter(promise1)
  upCounter(promise2)



  return counter === 2 && Promise.all([promise1, promise2])
}
all(getPromise1, getPromise2).then(value => {
  console.log(value)
})
