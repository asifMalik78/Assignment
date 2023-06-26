import express from "express";
import cors from "cors";
import { APP_PORT } from "./config/envConfig.js";
import db from "./config/dbConfig.js";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api", router);

const port = APP_PORT || 4000;

db()
  .then(async () => {
    try {
      console.log("connected to db");
      await app.listen(port);
      console.log(`Server is Running on Port: ${port}`);
    } catch (error) {
      console.log("Error in Connecting to the Server");
    }
  })
  .catch((err) => {
    console.log("Invalid Connection ...");
  });
