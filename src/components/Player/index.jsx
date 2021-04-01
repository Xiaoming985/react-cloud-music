import React, { Component } from 'react'
import { Image, Slider, Popover } from 'antd';
import {
  StepBackwardOutlined,
  PauseCircleFilled,
  PlayCircleFilled,
  StepForwardOutlined,
  HeartOutlined,
  RollbackOutlined,
  SoundOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import playerStyle from "./player.module.css"

export default class Player extends Component {
  state = {
    playing: true
  };

  switch = () => {
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Image
          width={70}
          height={70}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div style={{flex: 1.5, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <StepBackwardOutlined className={playerStyle['player-icon__ctrl']} />
          { 
            this.state.playing 
              ? <PauseCircleFilled className={playerStyle['player-icon__main']} onClick={this.switch} /> 
              : <PlayCircleFilled className={playerStyle['player-icon__main']} onClick={this.switch} />
          }
          <StepForwardOutlined className={playerStyle['player-icon__ctrl']} />
        </div>
        <div style={{flex: 6}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', padding: '0 8px'}}>
            <span>歌曲 - 歌手</span>
            <span>01:00 / 03:59</span>
          </div>
          <Slider defaultValue={30} />
          <audio src=""></audio>
        </div>
        <div style={{flex: 2, display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
          <HeartOutlined className={playerStyle['player-icon']} />
          <RollbackOutlined className={playerStyle['player-icon']} />
          <Popover content={<div style={{width: '200px'}}><Slider defaultValue={30} /></div>}>
            <SoundOutlined className={playerStyle['player-icon']} />
          </Popover>
          <MenuUnfoldOutlined className={playerStyle['player-icon']} />
        </div>
      </div>
    )
  }
}
