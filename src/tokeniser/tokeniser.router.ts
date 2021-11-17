
import express, { Request, Response } from "express";
import * as TokeniserService from "./tokeniser.service";

export const tokeniserRouter = express.Router();

tokeniserRouter.put("/tokenise", async (req: Request, res: Response) => {
    try {
        const buffers = [];

        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const data = JSON.parse(Buffer.concat(buffers).toString())

        const tokens = await TokeniserService.tokenise(data);
        res.status(201).send(tokens)
    } catch (e) {
        res.status(500).send(e)
    }
})

tokeniserRouter.get("/detokenise", async (req: Request, res: Response) => {
    try {
        const buffers = [];

        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const data = JSON.parse(Buffer.concat(buffers).toString())

        const accountNumbers = await TokeniserService.detokenise(data);
        res.status(201).send(accountNumbers)
    } catch (e) {
        res.status(500).send(e)
    }
})