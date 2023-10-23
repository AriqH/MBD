import db from "../config/mysql-connect.js";

export const getAllJadwal = (req, res) =>{
    db.query("call get_all_jadwal", (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}
