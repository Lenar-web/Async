let getPromise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
let getPromise2 = new Promise((resolve) => {
  resolve(2);
});

const all = ([...pomisesArray]) => {
  let counter = 0;
  let data = [];

  return new Promise((resolve) => {
    pomisesArray.forEach((item, idx) => {
      item.then((value) => {
        data[idx] = value;
        counter++;
        counter == pomisesArray.length && resolve(data);
      });
    });
  });
};
all([getPromise1, getPromise2]).then((data) => console.log(data));
