import { PLAY_MUSIC } from "../constant.js"

const music = null

export default function musicReducer(preState = music, action) {
  const { type, data } = action
  switch (type) {
    case PLAY_MUSIC:
      return data
    default: 
      return preState
  }
}