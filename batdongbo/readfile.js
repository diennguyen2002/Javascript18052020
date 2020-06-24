const fs = require('fs')

// fs.readFile('./data.json',(error, data)=>{
//     console.log(JSON.parse(data))
// })

try {
    const value = fs.readFileSync('./data.json')
    console.log(JSON.parse(value));
        
} catch (error) {
    console.log(error.message)
}
