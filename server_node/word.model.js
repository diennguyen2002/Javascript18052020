const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://root:root@diennguyen-mongodb.nlxuo.mongodb.net/db_vocabulary?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const Word = mongoose.model('Word', {
    en: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    vn: {
        type: String,
        require: true,
        trim: true
    },
    isMemorized: {
        type: Boolean,
        require: true,
        default: false
    }
});

module.exports = {Word}

// Select
// Word.find({})
// .then(word => console.log(word))
// .catch(error => console.log(error))

//Insert
// const word = new Word({en: 'One', vn: 'Mot'})
// word.save()
// .then(newWord => console.log(newWord))
// .catch(error => console.log(error))

//Update
// Word.findByIdAndUpdate('5eff1f18bdc4401e98890ac7', {
//     isMemorized: true
// }, {
//     new: true
// }).then(updateWord => console.log(updateWord))
// .catch(error => console.log(error))

//Delete
// Word.findByIdAndDelete('5eff1f18bdc4401e98890ac7')
// .then(deletedWord => console.log(deletedWord))
// .catch(error => console.log(error))