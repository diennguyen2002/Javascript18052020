const readlinesync = require('readline-sync')
const fs = require('fs')

const questions = ['Insert', 'Delete', 'Update', 'Reset', 'Show data'];
const pathData = './data.json';
const index = readlinesync.keyInSelect(questions, 'What do you want?')

switch (index) {
    case 0:
        insertDatabase();
        break;
    case 1:
        deleteDatabase();
        break;
    case 2:
        updateDatabase();
        break;
    case 3:
        resetDatabase();
        break;
    case 4:
        showDatabase();
        break;
    default:
        break;
}

function showDatabase(){
    if(!fs.existsSync(pathData)){
        console.log('Data is empty!!!');
     } else {
         fs.readFile(pathData,(error, data) => {
             const db = JSON.parse(data)
             db.forEach(element => {
                console.log("Name: " + element.name + " - Age: " + element.age);
             });
         })
     }
}

function insertDatabase(){
    const name =  readlinesync.question('What is your name ? ')
    const age =  readlinesync.question('How old are you ? ')
    if(!fs.existsSync(pathData)){
        const value = [{"name": name, "age": age}]
        save(value, 'inserted')
    } else {
        fs.readFile(pathData,(error, data) => {
            const db = JSON.parse(data)
            const value = {"name": name, "age": age}
            //console.log(db.length)
            db.push(value)
            save(db, 'inserted')
        })
    }
}

function deleteDatabase(){
    if(!fs.existsSync(pathData)){
       console.log('Data is empty!!!');
    } else {
        fs.readFile(pathData,(error, data) => {
            const db = JSON.parse(data)
            const dbtemp = db.map((item)=>{
                return item.name + " - " + item.age
            })
            const index = readlinesync.keyInSelect(dbtemp,'Who do you want to delete? ')
            //console.log(index);
            if(index!==-1) {
                db.splice(index, 1);
                save(db, 'deleted')
            }
        })
    }
}

function updateDatabase(){
    if(!fs.existsSync(pathData)){
        console.log('Data is empty!!!');
     } else {
         fs.readFile(pathData,(error, data) => {
             const db = JSON.parse(data)
             const dbtemp = db.map((item)=>{
                 return item.name + " - " + item.age
             })
             const idx = readlinesync.keyInSelect(dbtemp,'Who do you want to update? ')
             //console.log(index);
             if(idx!==-1) {
                const name =  readlinesync.question('New name ? ')
                const age =  readlinesync.question('New age ? ')
                const newdb = db.map((item, index)=>{
                    if(index === idx){
                        return {"name":name, "age":age}
                    }
                    return item
                })
                save(newdb, 'Updated')
             }
         })
     }
}

function resetDatabase() {
    const isReset = readlinesync.question('Are you sure to reset all data?(Y/N):')
    if(isReset === 'Y'){
        save([], 'reset!!!')
    }
}

function save(value, msg){
    fs.writeFile(pathData, JSON.stringify(value), {encoding: 'utf8'}, function(err){
        if(err) return console.log(err)
        console.info(msg);
    })
}

