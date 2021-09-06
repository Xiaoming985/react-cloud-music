import React, { Component } from 'react'
import { getBanner, getRecommendSongList, getRecommendNewSongs } from "@/api/api"
import { Button, Carousel } from 'antd'
import { CaretRightOutlined, PlusOutlined } from '@ant-design/icons'
import'./index.less'
import { connect } from 'react-redux'
import { initMusic } from "@/store/actions/music"
class Recommend extends Component {

  state = {
    banner: [],
    songList: [],
    newSongs: [],
    active: undefined
  }

  componentDidMount() {
    // 获取轮播图
    getBanner({}).then(res => {
      this.setState({
        banner: res.banners
      })
    })
    // 获取歌单
    getRecommendSongList({limit: 8}).then(res => {
      this.setState({
        songList: res.result
      })
    })
    // 最新音乐
    getRecommendNewSongs().then(res => {
      this.setState({
        newSongs: res.result
      })
    })
  }

  playMusic = (item) => {
    // console.log(item)
    // this.props.initMusic(item)
  }

  handleClick = (item) => {
    this.setState({
      active: item.id
    })
  }

  render() {
    const { banner, songList, newSongs, active } = this.state 
    return (
      <div className="recommend-wrap">
        <Carousel
          autoplay={true}
          slidesToShow={3}
          lazyLoad={true}
          centerMode={true}
          variableWidth={false}
        >
          {
            banner.map(item => {
              return (
                // <div key={item.targetId} style={{display:'flex',justifyContent:'center'}}>
                  <img src={item.imageUrl} alt="" key={item.targetId} className="carousel" />
                // </div>
              )
            })
          }
        </Carousel>
        <div className="daily">
          <div className="daily-item">
            <div className="item-img__wrap">
              <img src="" alt="" className="item-img" />
            </div>
            <div>
              <span className="item-title">私人FM</span>
              <span className="item-desc">享受你的音乐专属推荐</span>
            </div>
          </div>
          <div className="daily-item daily-mid">
            <div className="item-img__wrap">
              <img src="" alt="" className="item-img" />
            </div>
            <div>
              <span className="item-title">每日歌曲推荐</span>
              <span className="item-desc">根据你的口味生成</span>
            </div>
          </div>
          <div className="daily-item">
            <div className="item-img__wrap">
              <img src="" alt="" className="item-img" />
            </div>
            <div>
              <span className="item-title">排行榜</span>
              <span className="item-desc">最热音乐榜</span>
            </div>
          </div>
        </div>
        <div className="section">
          <span className="section-title">
            <img src={require('../../../assets/music.png').default} alt="" className="section-icon" />推荐歌单
          </span>
          <span className="text__more">更多&gt;</span>
        </div>
        <div className="recommend-list">
          {
            songList.map(item => {
              return (
                <div className="recommend-item" key={item.id}>
                  <img src={item.picUrl + "?param=150y150"} alt="" className="recommend-item__img" />
                  <span className="recommend-item__title">{item.name}</span>
                </div>
              )
            })
          }
        </div>

        <div className="section">
          <span className="section-title">
            <img src={require('../../../assets/music-list.png').default} alt="" className="section-icon" />最新音乐
          </span>
          <span className="text__more">更多&gt;</span>
        </div>
        <div className="new-list">
          {
            newSongs.map((item,index) => {
              return (
                <div className={['new-item', active === item.id ? 'active-item' : ''].join(' ')} key={item.id} onClick={() => this.handleClick(item)}>
                  <div className="new-item__index">{(index + 1 + "").padStart(2, "0")}</div>
                  <img src={item.picUrl + '?param=50y50'} alt="" className="new-item__img" />
                  <div className="new-item__song">
                    <span className="new-item__song-name">{item.name + (item.song.alias.length > 0 ? `(${item.song.alias.join("、")})` : '')}</span>
                    <span className="new-item__song-desc">{item.song.artists.map(ele => ele.name).join("/")}</span>
                  </div>
                  <div className="new-item__ctrl">
                    <Button type="primary" shape="circle" size="small" block icon={<CaretRightOutlined />} />
                    <Button type="primary" shape="circle" size="small" block icon={<PlusOutlined />} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  {initMusic}
)(Recommend)
