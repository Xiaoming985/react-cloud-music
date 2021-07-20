import React, { Component } from 'react'
import { Menu } from 'antd';
import {withRouter} from "react-router"
import './header.css'

class Header extends Component {
  state = {
    current: 'recommend',
  };

  handleClick = e => {
    this.setState({ current: e.key });
    this.props.history.replace(`${this.props.match.url}/${e.key}`);
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="header-menu">
        <Menu.Item key="recommend">
          个性推荐
        </Menu.Item>
        <Menu.Item key="songList">
          歌单
        </Menu.Item>
        <Menu.Item key="broadcast">
          主播电台
        </Menu.Item>
        <Menu.Item key="new">
          最新音乐
        </Menu.Item>
        <Menu.Item key="musician">
          歌手
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Header)