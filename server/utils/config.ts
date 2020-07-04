import * as dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || 'q';
export const DB_CONN_STRING = process.env.DB_CONN_STRING || 'a';

console.log({PORT, DB_CONN_STRING});
