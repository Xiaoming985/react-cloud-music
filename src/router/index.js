import React, { Component } from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from "../layouts/Header"
import Index from "../pages/Index"

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" component={Index} />
      </Router>
    )
  }
}
