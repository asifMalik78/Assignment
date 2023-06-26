import { connect } from "mongoose";
import { DB_PASSWORD } from "./envConfig.js";

const mongoURL = `mongodb+srv://aasif2364:${DB_PASSWORD}@cluster0.tiseuv2.mongodb.net/?retryWrites=true&w=majority`;
const connectDb = async () => {
  const db = await connect(mongoURL);
  return db;
};

export default connectDb;
