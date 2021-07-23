import React, { Component } from 'react'
import { getBanner, getSongList, getNewSongs } from "@/api/api"
import { Carousel } from 'antd'
// import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import'./index.less'
export default class Recommend extends Component {

  state = {
    banner: [],
    songList: [],
    newSongs: []
  }

  componentDidMount() {
    getBanner({}).then(res => {
      this.setState({
        banner: res.banners
      })
    })
    getSongList({limit: 16}).then(res => {
      this.setState({
        songList: res.playlists
      })
    })
    getNewSongs({type: 0}).then(res => {
      this.setState({
        newSongs: res.data.slice(0, 10)
      })
    })
  }

  render() {
    const { banner, songList, newSongs } = this.state 
    return (
      <div className="recommend-wrap">
        <Carousel
          autoplay={true}
          slidesToShow={1}
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
                  <img src={item.coverImgUrl + "?param=150y150"} alt="" className="recommend-item__img" />
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
                <div className="new-item" key={item.id}>
                  <div className="new-item__index">{index + 1}</div>
                  <img src={item.album.picUrl + '?param=50y50'} alt="" className="new-item__img" />
                  <div className="new-item__song">
                    <span className="new-item__song-name">{item.name}</span>
                    <span className="new-item__song-desc">Label</span>
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
