import express from "express"
import { AuthRouter } from "./auth"

export const APIRouter = express.Router()

APIRouter.use("/auth", AuthRouter)
