import express from "express";
import cors from "cors";
import connection from "./config/mysql-connect.js";
import { config } from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/penumpang.js";
import transaksiRouter from "./routes/tansaksi.js";
import jadwalRouter from "./routes/jadwal.js";
import busRouter from "./routes/bus.js";
config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/penumpang", userRouter);
app.use("/api/v1/transaksi", transaksiRouter);
app.use("/api/v1/jadwal", jadwalRouter);
app.use("/api/v1/bus", busRouter);
app.listen(port, () => {
  console.log(`Server Running in http://localhost:${2003}/api/v1`);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
  });
});
