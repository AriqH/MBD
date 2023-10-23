import db from "../config/mysql-connect.js";

export const getAllTransaksi = (req, res) =>{
    db.query("call get_all_transaksi", (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}
