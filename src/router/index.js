import React, { Component } from 'react'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// import Header from "../components/Header"
import Index from "../pages/Index"
import MV from "../pages/MusicVideo"

export default class Routers extends Component {
  render() {
    return (
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/mv" component={MV} />
          <Redirect to="/index" />
        </Switch>
      </Router>
    )
  }
}
