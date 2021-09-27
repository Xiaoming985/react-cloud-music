import React, { Component } from 'react'
import { connect } from "react-redux"
import { Image, Slider, Popover, message } from 'antd';
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
import { playMusic } from "@/store/actions/music"

class Player extends Component {
  state = {
    playing: false, // 是否正在播放
    max: 0, // 最大时长
    currentTime: 0 // 当前播放时长
  };
  audio = React.createRef();

  /**
   * 切换播放状态
   * @param {String} flag on-播放/暂停 prev-上一首 next-下一首
   */
   handleSwitch = (flag) => {
    if (flag === 'on') {
      this.setState({
        playing: !this.state.playing
      }, () => {
        if (this.state.playing) {
          this.audio.current.play() // 播放
        } else {
          this.audio.current.pause() // 暂停
        }
      });
      return;
    }
    let index = this.props.playList.findIndex(item => item.id === this.props.music.id)
    let length = this.props.playList.length
    if (length === 1) {
      // 播放列表仅一首
      message.warning('no more');
      return;
    }
    let idx = flag === 'prev' 
      ? (index - 1) < 0 ? (length - 1) : (index - 1)
      : (index + 1) > (length - 1) ? 0 : (index + 1)
    // console.log(idx);
    this.props.playMusic(this.props.playList[idx])
  }

  // 当前的播放位置发送改变时触发
  handleTimeUpdate = (e) => {
    // console.log(e);
    this.setState({
      currentTime: this.audio.current.currentTime, // 这里获取到的(单位:s)
      max: this.audio.current.duration
    })
  }

  // 播放时长改变时回调, 由"NaN"变为实际时长也会触发
  handleDurationChange = () => {
    this.handleTimeUpdate()
  }

  // 当媒介已开始播放时触发
  handlePlaying = () => {
    this.setState({
      playing: true
    })
  }

  // 暂停时触发
  handlePause = () => {
    this.setState({
      playing: false
    })
  }

  // 当媒介已到达结尾时触发（PS:可发送类似“播放完毕,感谢收听/观看”之类的消息）。
  handleEnded = () => {
    this.setState({
      currentTime: 0,
      playing: false
    })
  }

  // 播放进度条改变时回调
  handleSliderChange = (value) => {
    this.audio.current.currentTime = value
  }

  // 格式化播放时长, duration(单位:ms)
  formatDuration = (duration) => {
    return Math.floor(duration / 1000 / 60).toString().padStart(2, '0') 
      + ":" 
      + Math.round(duration / 1000 % 60).toString().padStart(2, '0')
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.playList);
    // 根据id获取音乐url
    if (!prevProps.music || prevProps.music.id !== this.props.music.id) {
      getMusicUrl({id: this.props.music.id}).then(res => {
        this.audio.current.src = res.data[0].url
        this.audio.current.play()
      })
    }
  }

  render() {
    // console.log(this)
    const { max, currentTime } = this.state
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
          <StepBackwardOutlined className={playerStyle['player-icon__ctrl']} onClick={() => this.handleSwitch('prev')} />
          { 
            this.state.playing 
              ? <PauseCircleFilled className={playerStyle['player-icon__main']} onClick={() => this.handleSwitch('on')} /> 
              : <PlayCircleFilled className={playerStyle['player-icon__main']} onClick={() => this.handleSwitch('on')} />
          }
          <StepForwardOutlined className={playerStyle['player-icon__ctrl']} onClick={() => this.handleSwitch('next')} />
        </div>
        <div style={{flex: 6, padding: '0 10px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', padding: '0 5px'}}>
            <span>
              { music ? music.name + (music.song.alias.length > 0 ? `(${music.song.alias.join("、")})` : '') : '歌曲' } - { music ? music.song.artists.map(ele => ele.name).join("/") : '歌手' }
            </span>
            <span>{ this.formatDuration(currentTime * 1000) } / {`${music ? this.formatDuration(music.song.duration) : '00:00'}`}</span>
          </div>
          <Slider
            value={currentTime}
            max={max}
            tooltipVisible={false}
            disabled={this.props.music ? false : true}
            onChange={this.handleSliderChange}
          />
          <audio
            src=""
            ref={this.audio}
            onTimeUpdate={this.handleTimeUpdate}
            onPlaying={this.handlePlaying}
            onPause={this.handlePause}
            onEnded={this.handleEnded}
          >
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
  }),
  dispatch => ({
    playMusic: (data) => dispatch(playMusic(data))
  })
)(Player)
