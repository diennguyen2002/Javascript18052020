const express = require("express")
const app = express()
const bodyParser  =  require("body-parser")
const {Word} = require("./word.model")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 

//show
app.get("/word" , (req , res) => {
    Word.find({})
    .then(words => res.send({success : true , words}))
    .catch(error => res.send({success : false , message : error}))
})
//insert 
app.post("/word" , (req , res) => {
    const {en , vn } = req.body
    if(en === '' || vn === ''){
        return res.send({success : false , message : "Emty value"})
    }
    const newword = new Word({en: en , vn: vn})
    newword.save()
    .then(w => res.send({success : true , word : w}))
    .catch(error => res.send({success : false , message : error}))
})
//update
app.put("/word/:_id" , (req , res) => {
    const {_id} = req.params
    const {isMemorized} = req.body
    if(_id === '' || isMemorized === null){
        return res.send({success : false , message : "Emty value"})
    }
    Word.findByIdAndUpdate(_id,{isMemorized},{new : true})
    .then(w => res.send({success : true , word : w}))
    .catch(error => res.send({success : false , message : error}))
})
//delete
app.delete("/word/:_id" , (req , res) => {
    const {_id} = req.params
    if(_id.trim() === ''){
        return res.send({success : false , message : "Emty value"})
    }
    Word.findByIdAndDelete(_id)
    .then(w => res.send({success : true , word : w}))
    .catch(error => res.send({success : false , message : error}))
})

app.listen(process.env.PORT || "4000",() => console.log("Server started"))