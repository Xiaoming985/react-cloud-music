import React, { Component } from 'react'
import Header from "../../components/Header"
import Recommend from "./Recommend"
import {Route, Switch, Redirect} from 'react-router-dom'

export default class Index extends Component {
  render() {
    

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/index/recommend">
            <Recommend />
          </Route>
          <Route path="/index/songList">歌单</Route>
          <Redirect to="/index/recommend" />
        </Switch>
      </div>
    )
  }
}
