
import express, { Request, Response } from "express";
import * as TokeniserService from "./tokeniser.service";

export const tokeniserRouter = express.Router();

tokeniserRouter.put("/tokenise", async (req: Request, res: Response) => {
    try {
        const tokens = await TokeniserService.tokenise(req.body);
        res.status(201).send(tokens)
    } catch (e) {
        res.status(500).send(e)
    }
})

tokeniserRouter.get("/detokenise", async (req: Request, res: Response) => {
    try {
        const accountNumbers = await TokeniserService.detokenise(req.body);
        res.status(200).send(accountNumbers)
    } catch (e) {
        res.status(500).send(e)
    }
})