import React from 'react'
import { Link, Route, Switch } from "react-router-dom"

import Home from "./Router/Home"
import Save from "./Router/Save"
import View from "./Router/View"

const Root = () => {
  return (
    <div>
            <strong>THIS IS THE ROOT COMPONENT</strong>
        <Link to="/">Home</Link>
        <Link to="/save">Save</Link>
        <Link to="/view">View</Link>
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Save} exact path="/save" />
            <Route component={View} exact path="/view" />
        </Switch>
    </div>
  )
}
export default Root