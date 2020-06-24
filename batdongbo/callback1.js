// let a = 5
// getData((a) => console.log(a))

// function getData(cb) {
//     setTimeout(() => {
//         a = a + 1
//         cb(a)
//     }, 1000)
// }

const request = require('request');
function getTempCity(cityName, cb) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}&fbclid=IwAR029rMmbPo3tOT5rpeZ8dgrIZaexW84dWkvqXq5Dx-LZqbcc3hu9zMHeFA`
    request(URL, {
        json: true // auto convert body to json
    }, function (error, response, body) {
        if (error) return cb(error.message)
        if(body.cod!==200) return cb(body.message)
        cb(null, body.main.temp)

    })
}

let temp = getTempCity('Hanoi', function(error, response){
    console.log(error || response)
    return response;
})

console.log(temp);
