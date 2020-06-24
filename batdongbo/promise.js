const request = require('request');

function pheptinh(tinh, a, b) {
    return new Promise((resolve, reject)=>{
        const URL = `https://pheptinhonline.herokuapp.com/${tinh}/${a}/${b}`;
        request(URL, {json:true}, function(error, response, body){
            if (error) return reject(error.message)
            if(!body.success) return reject(body.message)
            resolve(body.message)
        });
    });
}


// pheptinh('cong',5,6)
// .then(value=>console.log(value))
// .catch(err=>console.log(err)
// )

Promise.all([
    pheptinh('cong', 1,2),
    pheptinh('tru', 10,2),
    pheptinh('nhan', 15,2),
    pheptinh('chia', 100,2),
])
.then(values=>console.log(values))
.catch(error=>console.log(error))