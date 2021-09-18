import { PLAY_MUSIC, ADD_MUSIC } from "../constant"

export const playMusic = data => ({type: PLAY_MUSIC, data})
export const addMusic = data => ({type: ADD_MUSIC, data})