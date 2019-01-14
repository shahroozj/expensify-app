const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('This is my resolved data');
        //reject('Something went wrong!');
    }, 2000)
})

console.log('before');

promise.then((data)=>{
    console.log(data);
    return 'Goto Second';
}).then((str)=>{
    console.log('Chain Promises', str);
}).catch((error)=>{
    console.log('error: ', error);
})

console.log('after');