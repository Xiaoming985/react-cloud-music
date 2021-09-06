import { createStore, combineReducers } from "redux"
import music from "./reducers/music"
 
const store = createStore(combineReducers({
  music
}))
export default store