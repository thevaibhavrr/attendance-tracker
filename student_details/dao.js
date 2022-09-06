const dbClient = require("../db-connection");

const getAllStudent = () => {
  return dbClient.query("SELECT * from student_details");
};
const getById = (id) => {
  return dbClient.query(`SELECT * from student_details where id = ${id}`);
};

const addNew = ({ id, name, admission }) => {
  return dbClient.query(
    `INSERT INTO student_details(id,name,admission)
     VALUES (${id},'${name}','${admission}') `
  );
};

const deleteData = (id) => {
  return dbClient.query(`delete from student_details where id = ${id}`);
};

module.exports = {
  getAllStudent,
  getById,
  deleteData,
  addNew
};
