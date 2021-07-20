import React, { Component } from 'react'
import { Carousel } from 'antd'
import'./index.less'

export default class Recommend extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="recommend-wrap">
        <Carousel autoplay={true}>
          <div>
            <h3 className="carousel">1</h3>
          </div>
          <div>
            <h3 className="carousel">2</h3>
          </div>
          <div>
            <h3 className="carousel">3</h3>
          </div>
          <div>
            <h3 className="carousel">4</h3>
          </div>
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
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
          <div className="recommend-item">
            <img src="" alt="" className="recommend-item__img" />
            <span className="recommend-item__title">title</span>
          </div>
        </div>

        <div className="section">
          <span className="section-title">
            <img src={require('../../../assets/music-list.png').default} alt="" className="section-icon" />最新音乐
          </span>
          <span className="text__more">更多&gt;</span>
        </div>
        <div className="new-list">
          <div className="new-item">
            <div className="new-item__index">01</div>
            <img src="" alt="" className="new-item__img" />
            <div className="new-item__song">
              <span className="new-item__song-name">Title</span>
              <span className="new-item__song-desc">Label</span>
            </div>
          </div>
          <div className="new-item">
            <div className="new-item__index">01</div>
            <img src="" alt="" className="new-item__img" />
            <div className="new-item__song">
              <span className="new-item__song-name">Title</span>
              <span className="new-item__song-desc">Label</span>
            </div>
          </div>
          <div className="new-item">
            <div className="new-item__index">01</div>
            <img src="" alt="" className="new-item__img" />
            <div className="new-item__song">
              <span className="new-item__song-name">Title</span>
              <span className="new-item__song-desc">Label</span>
            </div>
          </div>
          <div className="new-item">
            <div className="new-item__index">01</div>
            <img src="" alt="" className="new-item__img" />
            <div className="new-item__song">
              <span className="new-item__song-name">Title</span>
              <span className="new-item__song-desc">Label</span>
            </div>
          </div>
          <div className="new-item">
            <div className="new-item__index">01</div>
            <img src="" alt="" className="new-item__img" />
            <div className="new-item__song">
              <span className="new-item__song-name">Title</span>
              <span className="new-item__song-desc">Label</span>
            </div>
          </div>
          <div className="new-item">
            <div className="new-item__index">01</div>
            <img src="" alt="" className="new-item__img" />
            <div className="new-item__song">
              <span className="new-item__song-name">Title</span>
              <span className="new-item__song-desc">Label</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
