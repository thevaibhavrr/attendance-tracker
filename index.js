const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


const student_data = require('./student_details/index')
const attendanc = require('./attendance_traker/index')

app.use('/student-data',student_data)
app.use('/attendance-data',attendanc)
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server is runninig on ${PORT}`)
})