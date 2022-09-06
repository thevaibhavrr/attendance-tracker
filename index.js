const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


const attendance = require('./student_details/index')
app.use('/data',attendance)

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`server is runninig on ${PORT}`)
})