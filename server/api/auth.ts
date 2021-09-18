import express from "express"
import crypto from "../utils/crypto"
import {
  validateEmail,
  validatePassword,
  validateUsername, 
} from "../../common/validation"

export const AuthRouter = express.Router()

// enum MouseButton {
//   NONE = 0, //No button or un-initialized
//   LEFT = 1, //Primary button (usually the left button)
//   RIGHT = 2, //Secondary button (usually the right button)
//   MIDDLE = 4, //Auxiliary button (usually the mouse wheel button or middle button)
// }

// // 00001111

// const buttons: MouseButton = MouseButton.LEFT & MouseButton.RIGHT

// if (buttons & MouseButton.RIGHT) {

// }

AuthRouter.get("/", (req, res) => {
  res.cookie("token", "12345", {
    maxAge: 900000,
    httpOnly: true
  })

  res.send("Hello world!")
})

AuthRouter.post("/signup", (req, res) => {
  const { email, password, username } = req.body as {
    email?: string
    password?: string 
    username?: string 
  }

  if (!email) return res.status(400).send("Missing email")
  if (typeof email !== "string" || !validateEmail(email)) return res.status(400).send("Invalid email")
  
  if (!password) return res.status(400).send("Missing password")
  if (typeof password !== "string" || !validatePassword(password)) return res.status(400).send("Invalid password")

  if (!username) return res.status(400).send("Missing username")
  if (typeof username !== "string" || !validateUsername(username)) return res.status(400).send("Invalid username")
})

// "/login"
AuthRouter.get("/login", (req, res) => {
  const token = crypto.sign(String(Math.random()))

  res.cookie("token", token, {
    httpOnly: true
  })

  res.json({
    message: "success"
  })
})

AuthRouter.get("/auth", (req, res) => {
  const token = req.cookies.token as string | undefined

  if (!token) {
    res.status(401)

    res.json({
      message: "unauthorized"
    })

    return
  }

  let id: string | undefined

  try {
    id = crypto.verify(token) as string
  } catch {
    res.status(401)

    res.json({
      message: "unauthorized"
    })

    return
  }
  
  res.json({ id })
})