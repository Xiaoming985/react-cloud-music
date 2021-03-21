import React, { Component } from 'react'
import { Menu } from 'antd';
import './header.css'

export default class Header extends Component {
  state = {
    current: 'recommend',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="recommend">
          个性推荐
        </Menu.Item>
        <Menu.Item key="song-list">
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
