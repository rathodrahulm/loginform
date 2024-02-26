const express = require("express")  
const mongoose = require('mongoose')
const cors = require("cors")
const StudentModel = require('./models/Student')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://rahul:rahul@cluster0.rvedvlz.mongodb.net/student");

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    StudentModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else {
                res.json("the password is incorrect")
            }
        }else {
            res.json("No record ")
        }
    })
})

app.post('/register', (req, res) => {

    StudentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})