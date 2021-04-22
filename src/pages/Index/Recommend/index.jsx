import React, { Component } from 'react'
import { Carousel } from 'antd'

export default class Recommend extends Component {

  componentDidMount() {
    
  }

  render() {
    const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#ffede6',
    };

    const recommendStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '20px auto'
    };

    const recommendItem = {
      width: '33%',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const recommendMid = {
      borderLeft: '1px solid #e4e4e7',
      borderRight: '1px solid #e4e4e7'
    };

    const itemImgBox = {
      width: '60px',
      height: '60px',
      border: '1px solid #e82202',
      borderRadius: '50%',
      marginRight: '15px',
      position: 'relative'
    };

    const itemImg = {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto',
      width: '70%'
    }

    const itemTitle = {
      display: 'block',
      textAlign: 'left',
      fontSize: '16px'
    };

    const itemDesc = {
      display: 'block',
      textAlign: 'left',
      fontSize: '8px',
      color: '#999'
    }

    const itemHeader = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: '5px',
      borderBottom: '1px solid #e4e4e7',
      fontSize: '16px'
    }

    const itemHeaderTitle = {
      display: 'flex',
      alignItems: 'center'
    }

    const itemHeaderIcon = {
      width: '24px',
      height: '20px',
      marginRight: '10px'
    }

    const moreStyle = {
      fontSize: '12px',
      color: '#999'
    }

    const recommendContent = {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: '10px 0'
    }

    const contentItem = {
      width: '150px',
      textAlign: 'left',
      position: 'relative'
    }

    const ctnImg = {
      display: 'block',
      width: '100%',
      height: '150px'
    }

    const ctnTitle = {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }

    const newContent = {
      padding: '10px 0',
      display: 'flex',
      flexWrap: 'wrap'
    }

    const newItem = {
      width: '50%',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      padding: '5px 0',
      boxSizing: 'content-box'
    }

    const newIndexStyle = {
      width: '50px'
    }

    const newImg = {
      width: '50px',
      height: '50px'
    }

    const songStyle = {
      width: 'calc(100% - 50px - 50px)',
      height: '100%',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '0 10px'
    }

    const songNameStyle = {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }

    const singerStyle = {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }

    return (
      <div>
        <Carousel autoplay={true}>
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
        <div style={recommendStyle}>
          <div style={recommendItem}>
            <div style={itemImgBox}>
              <img src="" alt="" style={itemImg} />
            </div>
            <div>
              <span style={itemTitle}>私人FM</span>
              <span style={itemDesc}>享受你的音乐专属推荐</span>
            </div>
          </div>
          <div style={Object.assign({},recommendItem,recommendMid)}>
            <div style={itemImgBox}>
              <img src="" alt="" style={itemImg} />
            </div>
            <div>
              <span style={itemTitle}>每日歌曲推荐</span>
              <span style={itemDesc}>根据你的口味生成</span>
            </div>
          </div>
          <div style={recommendItem}>
            <div style={itemImgBox}>
              <img src="" alt="" style={itemImg} />
            </div>
            <div>
              <span style={itemTitle}>排行榜</span>
              <span style={itemDesc}>最热音乐榜</span>
            </div>
          </div>
        </div>
        <div style={itemHeader}>
          <span style={itemHeaderTitle}>
            <img src={require('../../../assets/music.png').default} alt="" style={itemHeaderIcon} />推荐歌单
          </span>
          <span style={moreStyle}>更多&gt;</span>
        </div>
        <div style={recommendContent}>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
          <div style={contentItem}>
            <img src="" alt="" style={ctnImg} />
            <span style={ctnTitle}>title</span>
          </div>
        </div>

        <div style={itemHeader}>
          <span style={itemHeaderTitle}>
            <img src={require('../../../assets/music-list.png').default} alt="" style={itemHeaderIcon} />最新音乐
          </span>
          <span style={moreStyle}>更多&gt;</span>
        </div>
        <div style={newContent}>
          <div style={newItem}>
            <div style={newIndexStyle}>01</div>
            <img src="" alt="" style={newImg} />
            <div style={songStyle}>
              <span style={songNameStyle}>Title</span>
              <span style={singerStyle}>Label</span>
            </div>
          </div>
          <div style={newItem}>
            <div style={newIndexStyle}>01</div>
            <img src="" alt="" style={newImg} />
            <div style={songStyle}>
              <span style={songNameStyle}>Title</span>
              <span style={singerStyle}>Label</span>
            </div>
          </div>
          <div style={newItem}>
            <div style={newIndexStyle}>01</div>
            <img src="" alt="" style={newImg} />
            <div style={songStyle}>
              <span style={songNameStyle}>Title</span>
              <span style={singerStyle}>Label</span>
            </div>
          </div>
          <div style={newItem}>
            <div style={newIndexStyle}>01</div>
            <img src="" alt="" style={newImg} />
            <div style={songStyle}>
              <span style={songNameStyle}>Title</span>
              <span style={singerStyle}>Label</span>
            </div>
          </div>
          <div style={newItem}>
            <div style={newIndexStyle}>01</div>
            <img src="" alt="" style={newImg} />
            <div style={songStyle}>
              <span style={songNameStyle}>Title</span>
              <span style={singerStyle}>Label</span>
            </div>
          </div>
          <div style={newItem}>
            <div style={newIndexStyle}>01</div>
            <img src="" alt="" style={newImg} />
            <div style={songStyle}>
              <span style={songNameStyle}>Title</span>
              <span style={singerStyle}>Label</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
