import { Router } from "express";
import { getAllJadwal } from "../controllers/jadwalController.js";


const jadwalRouter = Router();

jadwalRouter.get("/", getAllJadwal);
// userRouter.post("/", addPenumpang);
// userRouter.put("/", updatePenumpang);
// userRouter.delete("/", deletePenumpangByKtp);

export default jadwalRouter;
