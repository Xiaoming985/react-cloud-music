import http from '../utils/http';

// 获取轮播图 0: pc 1: android 2: iphone 3: ipad
export function getBanner(data){
  return http({
    url: '/banner',
    method: 'get',
    params: data
  })
}

// 获取精品歌单
export function getSongList(data) {
  return http({
    url: '/top/playlist/highquality',
    method: 'get',
    params: data
  })
}

// 新歌速递
export function getNewSongs(data) {
  return http({
    url: '/top/song',
    method: 'get',
    params: data
  })
}

// 推荐歌单
export function getRecommendSongList(data) {
  return http({
    url: '/personalized',
    method: 'get',
    params: data
  })
}

// 推荐新音乐
export function getRecommendNewSongs(data) {
  return http({
    url: '/personalized/newsong',
    method: 'get',
    params: data
  })
}

// 获取音乐url
export function getMusicUrl(data) {
  return http({
    url: '/song/url',
    method: 'get',
    params: data
  })
}