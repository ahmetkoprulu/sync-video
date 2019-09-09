import { ChatPanelActionTypes } from './chat-panel.type.js'

const INITIAL_STATE = {
  messages: [],
  isUsersVisible: true
}

const chatPanelReducer = (currentState=INITIAL_STATE, action) => {
  switch (action.type){
    case ChatPanelActionTypes.TOGGLE_USERS_VISIBILTY:
      return {
        ...currentState,
        isUsersVisible: !currentState.isUsersVisible
      }

    case ChatPanelActionTypes.SEND_MESSAGE:
      return {
        ...currentState,
        messages: [...currentState.messages, action.payload]
      }

    default:
      return currentState
  }
}

export default chatPanelReducer