import db from "../config/mysql-connect.js";

export const getAllBus = (req, res) =>{
    db.query("call get_all_bus", (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}

export const addBus = (req, res) =>{
    const {body} = req
    if (body.nama_bus.length == 0){
        res.status(400).json({
            status:"error",
            message: "nama bus harus di isi"
        })
    }
    db.query(`call InsertBus(${body.idBus}, "${body.nopol}", "${body.kelas}", ${body.kapasitas}, "${body.jenis}", "${body.nama_bus}")`, (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}

export const updateBus = (req, res) =>{
    const {body} = req
    db.query(`call UpdateBus("${body.id}", "${body.nopol}", "${body.kelas}","${body.kapasitas}", "${body.jenis}", "${body.nama_bus}")`, (err,results)=>{
        res.json({
            status: "success",
            payload: results
        })
    })
}


export const deleteBusById = (req, res) => {
    const { body } = req;
    db.query(`CALL DeleteBus('${body.idBus}')`, (err, results) => {
        res.json({
            status: "success",
            payload: results,
        });
    });
};
