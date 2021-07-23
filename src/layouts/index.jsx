import React, { Component } from 'react'
import { Layout, Menu, Avatar } from 'antd'
import {
  MenuOutlined,
  SearchOutlined,
  CustomerServiceFilled,
  YoutubeOutlined,
  TeamOutlined,
  PlayCircleOutlined,
  CloudOutlined,
  FolderAddOutlined,
  DownloadOutlined,
  ClockCircleOutlined,
  AudioOutlined,
  HeartOutlined,
  BarsOutlined,
  UserOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import Routers from '../router'
import Player from '../components/Player'
import "./index.less"
import {withRouter} from "react-router"

const { Footer, Sider, Content } = Layout;

class IndexLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  menuClick = (e) => {
    this.props.history.replace("/" + e.key);
  }

  render() {
    const iconClass = this.state.collapsed ? 'sider-footer__icon sider-footer__icon--collapsed' : 'sider-footer__icon';
    return (
      <Layout style={{width: '100vw', height: '100vh'}}>
        <Layout>
          <Sider 
            theme='light'
            collapsible
            collapsed={this.state.collapsed}
            trigger={null}
            style={{overflowX: 'hidden', overflowY: 'auto', borderRight: '0.5px solid rgba(0, 0, 0, 0.1)'}}
          >
            <div style={{backgroundColor: '#fff', textAlign: 'left'}}>
              <MenuOutlined 
                onClick={this.toggle}
                style={{padding: this.state.collapsed ? '20px 30px 0' : '20px 24px 0'}}
                title={this.state.collapsed ? '展开' : '收起'}
              />
            </div>
            <div style={{height: 'calc(100% - 87.5px)', overflowY:this.state.collapsed ? 'hidden': 'auto'}}>
              <Menu
                defaultSelectedKeys={['index']}
                mode="inline"
                onClick={this.menuClick}
              >
                <Menu.ItemGroup>
                  <Menu.Item key="search" icon={<SearchOutlined />}>
                    搜索
                  </Menu.Item>
                  <Menu.Item key="index" icon={<CustomerServiceFilled />}>
                    发现音乐
                  </Menu.Item>
                  <Menu.Item key="mv" icon={<YoutubeOutlined />}>
                    MV
                  </Menu.Item>
                  <Menu.Item key="friends" icon={<TeamOutlined />}>
                    朋友
                  </Menu.Item>
                </Menu.ItemGroup>
                { 
                  !this.state.collapsed &&
                  <Menu.ItemGroup title="我的音乐">
                    <Menu.Item key="local" icon={<PlayCircleOutlined />}>
                      本地音乐
                    </Menu.Item>
                    <Menu.Item key="download" icon={<DownloadOutlined />}>
                      下载管理
                    </Menu.Item>
                    <Menu.Item key="latest" icon={<ClockCircleOutlined />}>
                      最近播放
                    </Menu.Item>
                    <Menu.Item key="cloud" icon={<CloudOutlined />}>
                      我的音乐云盘
                    </Menu.Item>
                    <Menu.Item key="broadcast" icon={<AudioOutlined />}>
                      我的电台
                    </Menu.Item>
                    <Menu.Item key="collect" icon={<FolderAddOutlined />}>
                      我的收藏
                    </Menu.Item>
                  </Menu.ItemGroup>
                }
                {
                  !this.state.collapsed &&
                  <Menu.ItemGroup title="创建的歌单">
                    <Menu.Item key="like" icon={<HeartOutlined />}>
                      我喜欢
                    </Menu.Item>
                    <Menu.Item key="musicList" icon={<BarsOutlined />}>
                      歌单01
                    </Menu.Item>
                  </Menu.ItemGroup>
                }
              </Menu>
            </div>
            <div 
              style={{
                backgroundColor: '#fff',
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                flexDirection: this.state.collapsed ? 'column' : '',
                padding: '8px 0',
                alignItems: 'center',
                borderTop: '0.5px solid rgba(0, 0, 0, 0.1)',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                minHeight: '50px'
              }}
            >
              <div style={{width: this.state.collapsed ? 'auto' : '60%'}} className="user-avatar">
                <Avatar icon={<UserOutlined />} />
                { 
                  !this.state.collapsed && 
                  <span 
                    style={{
                      textOverflow: 'ellipsis', 
                      overflow: 'hidden', 
                      whiteSpace: 'nowrap', 
                      display: 'inline-block', 
                      marginLeft: '5px',
                      width: '60%',
                      textAlign: 'left'
                    }}>
                    用户名
                  </span> 
                }
              </div>
              <MailOutlined className={iconClass}/>
              <SettingOutlined className={iconClass} />
            </div>
          </Sider>
          <Content style={{padding: '10px 25px', backgroundColor: '#fff', overflowY: 'auto'}}>
            <Routers />
          </Content>
        </Layout>
        <Footer style={{padding: '0', height: '70px',overflow: 'hidden', backgroundColor: '#fff', borderTop: '0.5px solid rgba(0, 0, 0, 0.1)'}}>
          <Player />
        </Footer>
      </Layout>
    )
  }
}

export default withRouter(IndexLayout)