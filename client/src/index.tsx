import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { Login } from "./views/Login"
import { Signup } from "./views/Signup"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.body)
