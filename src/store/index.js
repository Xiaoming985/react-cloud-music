import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import music from "./reducers/music"
import playList from "./reducers/playList"
import thunk from "redux-thunk"

 
const store = createStore(
  combineReducers({
    music,
    playList
  }),// 此处的playList,则通过state.playList获取
  composeWithDevTools(applyMiddleware(thunk))
)
export default store