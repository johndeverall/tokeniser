
import express, { Request, Response } from "express";
import * as TokeniserService from "./tokeniser.service";

export const tokeniserRouter = express.Router();

const parse = async (req: Request) => {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }
    return JSON.parse(Buffer.concat(buffers).toString())
}

tokeniserRouter.put("/tokenise", async (req: Request, res: Response) => {
    try {
        const tokens = await TokeniserService.tokenise(await parse(req));
        res.status(201).send(tokens)
    } catch (e) {
        res.status(500).send(e)
    }
})

tokeniserRouter.get("/detokenise", async (req: Request, res: Response) => {
    try {
        const accountNumbers = await TokeniserService.detokenise(await parse(req));
        res.status(200).send(accountNumbers)
    } catch (e) {
        res.status(500).send(e)
    }
})