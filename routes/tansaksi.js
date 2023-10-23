import { Router } from "express";
import { getAllTransaksi } from "../controllers/transaksiController.js";

const transaksiRouter = Router();

transaksiRouter.get("/", getAllTransaksi);
// userRouter.post("/", addPenumpang);
// userRouter.put("/", updatePenumpang);
// userRouter.delete("/", deletePenumpangByKtp);

export default transaksiRouter;
