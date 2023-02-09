// async & await
// clear style of using promise :)

// 1. async
// promise 방법
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs ...
//     resolve('eunbin');
//   })
// }

async function fetchUser() {
  // do network request in 10 secs....
  return 'eunbin';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits()
  .then(console.log);

// 3. useful Promise APIs
// all([])
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// race([])
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);