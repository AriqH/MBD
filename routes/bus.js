import { Router } from "express";
import { addBus, deleteBusById, getAllBus, updateBus } from "../controllers/busController.js";


const busRouter = Router();

busRouter.get("/", getAllBus);
busRouter.post("/", addBus);
busRouter.put("/", updateBus);
busRouter.delete("/", deleteBusById);

export default busRouter;
