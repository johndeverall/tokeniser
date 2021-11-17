/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { tokeniserRouter } from "./tokeniser/tokeniser.router";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT)

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", tokeniserRouter)

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});