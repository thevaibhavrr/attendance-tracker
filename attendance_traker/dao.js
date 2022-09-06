const dbClient = require("../db-connection");

const getallData = ()=>{
    return dbClient.query("Select * from attendance_details");
}
const addNewData = ({id,status,student_id,ondate})=>{
    return dbClient.query(`insert into attendance_details(id,status,student_id,ondate)
                        values (${id},'${status}',${student_id},'${ondate}')`)
}
const getbyId = (id)=>{
    return dbClient.query(`select * from attendance_details where id=${id}`);
}
const deletedata = (id)=>{
    return dbClient.query(`delete from attendance_details where id =${id}`);
}


module.exports={
    getallData,
    addNewData,
    deletedata,
    getbyId
}