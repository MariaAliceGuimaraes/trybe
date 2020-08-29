const promise = new Promise ((resolve,reject) => {
  console.log('to resolvendo parca');
  return reject(3);
})

// promise.then(result => console.log(result))
//   .catch(result => console.log(`No ${result}`));

async function getResult () {
  try {
    const result = await promise;
  } catch(e) {
    console.log(`erro ${e}`)
  }

}

getResult();