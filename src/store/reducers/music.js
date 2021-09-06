import { INIT_MUSIC } from "../constant"

const music = null

export default function musicReducer(preState = music, action) {
  const { type, data } = action
  switch (type) {
    case INIT_MUSIC:
      return data;
    default: 
      return preState
  }
}