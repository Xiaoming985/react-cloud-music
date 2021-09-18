import React, { Component } from 'react'
import { connect } from "react-redux"
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
import { getMusicUrl } from "@/api/api"
class Player extends Component {
  state = {
    playing: false // 是否正在播放
  };
  audio = React.createRef();

  // 切换播放状态
  switch = () => {
    this.setState({
      playing: !this.state.playing
    }, () => {
      if (this.state.playing) {
        this.audio.current.play() 
      }
    });
  }

  // 获取音乐的播放时长
  getDuration = (duration) => {
    return Math.floor(duration / 1000 / 60) + ":" + Math.round(duration / 1000 % 60)
  }

  // 当前的播放位置发送改变时触发
  handleTimeUpdate = (e) => {
    console.log(e);
  }

  // 播放时长改变时回调, 由"NaN"变为实际时长也会触发
  handleDurationChange = () => {
    this.handleTimeUpdate()
  }

  // 播放进度条改变时回调
  handleSliderChange = (value) => {
    this.audio.current.currentTime = value
  }

  // 格式化播放时长
  formatDuration = (duration) => {

  }

  componentDidUpdate() {
    // console.log(this.props.playList);
    // 根据id获取音乐url
    getMusicUrl({id: this.props.music.id}).then(res => {
      this.audio.current.src = res.data[0].url
      this.audio.current.play()
    })
  }

  render() {
    // console.log(this)
    const { music } = this.props
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Image
          width={70}
          height={70}
          preview={false}
          src={ music ? music.picUrl + '?param=70y70' : "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
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
        <div style={{flex: 6, padding: '0 10px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', padding: '0 5px'}}>
            <span>
              { music ? music.name + (music.song.alias.length > 0 ? `(${music.song.alias.join("、")})` : '') : '歌曲' } - { music ? music.song.artists.map(ele => ele.name).join("/") : '歌手' }
            </span>
            <span>00:00 / {`${music ? this.getDuration(music.song.duration) : '00:00'}`}</span>
          </div>
          <Slider
            defaultValue={0}
            tooltipVisible={false}
            disabled={this.props.music ? false : true}
            onChange={this.handleSliderChange}
          />
          <audio src="" ref={this.audio} onTimeUpdate={this.handleTimeUpdate}>
            Your browser does not support the audio element.
          </audio>
        </div>
        <div style={{flex: 2, display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
          <HeartOutlined className={playerStyle['player-icon']} />
          <RollbackOutlined className={playerStyle['player-icon']} />
          <Popover trigger="click" content={<><Slider defaultValue={30} /></>}>
            <SoundOutlined className={playerStyle['player-icon']} />
          </Popover>
          <Popover trigger="click" arrowPointAtCenter content={<>播放列表</>}>
            <MenuUnfoldOutlined className={playerStyle['player-icon']} />
          </Popover>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    music: state.music,
    playList: state.playList
  })
)(Player)
