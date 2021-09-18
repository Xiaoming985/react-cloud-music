import { ADD_MUSIC } from "../constant"

const playList = []

export default function musicListReducer(preState = playList, action) {
  const { type, data } = action
  switch (type) {
    case ADD_MUSIC:
      let exist = preState.some(item => item.id === data.id)
      return exist ? preState : [...preState, data]
    default: 
      return preState
  }
}