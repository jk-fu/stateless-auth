import express from "express"
import cookieParser from "cookie-parser"
import { APIRouter } from "./api"
import { storeTask } from "./store"

const app = express()

const PORT = 8000

storeTask().then(() => {
  app.use(cookieParser())
  
  app.use("/api", APIRouter)
  
  app.listen(PORT)
  
  console.log(`Server running on port ${8000}`)
}).catch(console.error)

// TODO: Look up types for typescript
