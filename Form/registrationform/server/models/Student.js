const mongoose  = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    confirmPassword: String
})

const StudentModel = mongoose.model("students", StudentSchema)
module.exports= StudentModel