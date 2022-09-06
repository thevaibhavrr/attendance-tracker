const express = require("express");
const route = express.Router();
const dao = require("./dao");
const bodyParser = require('body-parser');
const { ReadyForQueryMessage } = require("pg-protocol/dist/messages");

const app = express();
app.use(bodyParser.json());


route.get("/get-all", async (req, res) => {
  const student_data = await dao.getAllStudent();
  res.send(student_data.rows);
});

route.get("/get-by-id/:id", async (req, res) => {
  const getdata = await dao.getById(req.params.id);
  res.send(getdata.rows);
});


route.delete("/delete-data/:id", async (req, res) => {
  console.log(req.params.id);
  const dataremove = await dao.deleteData(req.params.id);
  res.send("data delete succefull");
});


route.post('/add-new',async (req,res)=>{
  const add = await dao.addNew(req.body)
  res.send('new user has been addedd')
})



module.exports = route;
