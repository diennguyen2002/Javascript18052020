//Điều kiện là function phải trả về 1 promise


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

async function xuly(){
    try {
        const tong = await pheptinh('cong', 10, 20)
        const hieu = await pheptinh('tru', tong, 5)
        console.log(hieu);
    } catch (error) {
        console.log(error);
    }
}

xuly()