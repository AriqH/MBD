import db from "../config/mysql-connect.js";

export const getAllPenumpang = (req, res) =>{
    db.query("call get_all_penumpang", (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}

export const addPenumpang = (req, res) =>{
    const {body} = req
    if (body.ktp.length !==16){
        res.status(400).json({
            status:"error",
            message: "digit ktp harus 16"
        })
    }
    db.query(`call InsertPenumpang("${body.ktp}", "${body.nama}", "${body.alamat}","${body.noHp}")`, (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}

export const updatePenumpang = (req, res) =>{
    const {body} = req
    db.query(`call UpdatePenumpang("${body.ktp}", "${body.nama}", "${body.alamat}","${body.noHp}")`, (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}


export const deletePenumpangByKtp = (req, res) => {
    const { body } = req;
    db.query(`CALL DeletePenumpang('${body.no_ktp}')`, (err, results) => {
        res.json({
            status: "success",
            payload: results,
        });
    });
};
