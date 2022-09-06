const express = require("express");
const route = express.Router();
const dao = require("./dao");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

route.get("/get-all", async (req, res) => {
  const present_data = await dao.getallData();
  res.send(present_data.rows);
});

route.get("/get-by-id/:id", async (req, res) => {
  const getdata = await dao.getbyId(req.params.id);
  res.send(getdata.rows);
});

route.delete("/delete-data/:id", async (req, res) => {
  const dataremove = await dao.deletedata(req.params.id);
  res.send("data delete succefull");
});

route.post("/add-new", async (req, res) => {
  const add = await dao.addNewData(req.body);
  res.send("new user has been addedd");
});

module.exports = route;
