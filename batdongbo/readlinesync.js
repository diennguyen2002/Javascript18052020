const readlinesync = require('readline-sync')

//const name = readlinesync.question('What is your name? :')
//console.log(name);

const questions = ['insert', 'delete', 'update', 'reset'];
const index = readlinesync.keyInSelect(questions, 'What do you want?')

console.log(index);

switch (index) {
    case 0:
        insertDatabase();
        break;

    default:
        break;
}

function insertDatabase(){
    const name =  readlinesync.question('What is your name?:')
    const age =  readlinesync.question('How old are you?:')
    console.log(name, age)

}

