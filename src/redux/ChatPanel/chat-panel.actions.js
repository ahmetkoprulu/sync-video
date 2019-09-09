import { ChatPanelActionTypes } from './chat-panel.type.js'

export const toggleUsersVisibilty = () => ({
  type: ChatPanelActionTypes.TOGGLE_USERS_VISIBILTY,
})

export const sendMessage = message => ({
  type: ChatPanelActionTypes.SEND_MESSAGE,
  payload: message
})
