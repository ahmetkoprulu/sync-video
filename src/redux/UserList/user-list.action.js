import { UserListActionTypes } from './user-list.type.js'

export const joinRoom = user => ({
  type: UserListActionTypes.JOIN_ROOM,
  payload: user
})

export const setCurrentUser = user => ({
  type: UserListActionTypes.SET_CURRENT_USER,
  payload: user
})