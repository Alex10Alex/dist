'use strict';

console.log('Request data');
const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Loading...');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000);
});
req.then((product) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            product.status = 'order';
            reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data =>{
    console.log(data);

}).catch(() =>{
    console.log('error'); 
});