import "./Signup.css"
import React from "react"
import {
  validateEmail,
  validateUsername,
} from "../../../common/validation"
import { api } from "../utils/api"
import axios from "axios"

export const Signup: React.FC = () => {
  const [emailField, setEmailField] = React.useState<string>("")
  const [usernameField, setUsernameField] = React.useState<string>("")
  const [passwordField, setPasswordField] = React.useState<string>("")
  const [confirmPasswordField, setConfirmPasswordField] = React.useState<string>("")
  
  const isEmailValid = validateEmail(emailField)
  const isUsernameValid = validateUsername(usernameField)
  const isPasswordValid = validateUsername(passwordField)
  const isConfirmPasswordValid = (passwordField === confirmPasswordField)

  const canSubmit = isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid

  const submit = React.useCallback(() => {
    axios.post("/auth/signup", {
      email: emailField,
      password: passwordField,
      username: usernameField,
    })
  }, [
    emailField,
    usernameField,
    passwordField,
    confirmPasswordField,
  ])

  return (
    <form id="signup" onSubmit={e => {
      e.preventDefault()
      submit()
    }}>
      <h2>Sign up</h2>

      <input placeholder="email" onInput={(event) => setEmailField((event.target as HTMLInputElement).value)} />
      <input placeholder="username" onInput={(event) => setUsernameField((event.target as HTMLInputElement).value)} />
      <input placeholder="password" onInput={(event) => setPasswordField((event.target as HTMLInputElement).value)} />
      <input placeholder="confirm password" onInput={(event) => setConfirmPasswordField((event.target as HTMLInputElement).value)} />

      <input type="submit" value="submit" disabled={!canSubmit} />
    </form>
  )
}
