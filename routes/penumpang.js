import { Router } from "express";
import { addPenumpang, deletePenumpangByKtp, getAllPenumpang, updatePenumpang } from "../controllers/penumpangController.js";

const userRouter = Router();

userRouter.get("/", getAllPenumpang);
userRouter.post("/", addPenumpang);
userRouter.put("/", updatePenumpang);
userRouter.delete("/", deletePenumpangByKtp);

export default userRouter;
