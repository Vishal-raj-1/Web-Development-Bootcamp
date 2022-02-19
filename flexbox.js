
const marks = new Promise((resolve, reject) => {
    const greet = 'Hi'
    if(greet === 'hello')
        resolve(greet);
    else    
        reject();
})

marks.then((greet) => {
    console.log('your Promise is resolve', 'value of greet is ',greet);
}).catch(() => {
    console.log('your promise is rejected');
})