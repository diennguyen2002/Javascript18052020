const fs = require('fs')

const values = [{"id": 1, "name": "Nguyen Van A", "age":20}]

fs.writeFile('./data1.json', JSON.stringify(values), {encoding: 'utf8'}, function(err){
    console.log(err)
})