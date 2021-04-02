import React, { Component } from 'react'
import Header from "../../components/Header"
import { Carousel } from 'antd';
import {Route, Switch, Redirect} from 'react-router-dom'

export default class Index extends Component {
  render() {
    const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#40a9ff',
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/index/recommend" exact>
            <Carousel>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Route>
          <Route path="/index/songList">歌单</Route>
          <Redirect to="/index/recommend" />
        </Switch>
      </div>
    )
  }
}
