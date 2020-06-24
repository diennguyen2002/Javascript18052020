const request = require('request');
function pheptinh(tinh, a, b, cb) {
    const URL = `https://pheptinhonline.herokuapp.com/${tinh}/${a}/${b}`;
    request(URL, {json:true}, function(error, response, body){
        if (error) return cb(error.message)
        if(!body.success) return cb(body.message)
        cb(null, body.message)
    });
}

pheptinh('cong', 5, 10, function(err, res1){
    console.log(res1);
    pheptinh('tru',res1,5,function(err, res2){
        console.log(res2);
        pheptinh('nhan',res2,10,function(err, res3){
            console.log(res3);
            pheptinh('chia',res3,2,function(err, res4){
                console.log(res4);
            })
        })
    })
})




