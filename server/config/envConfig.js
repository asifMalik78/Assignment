import { config } from "dotenv";

config();

export const {DB_PASSWORD, APP_PORT , JWT_SECRET } = process.env;
