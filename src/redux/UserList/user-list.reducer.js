import { UserListActionTypes } from './user-list.type.js'

const INITIAL_STATE = {
  users: [],
  currentUser: ''
}

const userListReducer = (currentState=INITIAL_STATE, action) => {
  switch (action.type){
    case UserListActionTypes.JOIN_ROOM:
      return {
        ...currentState,
        users: currentState.users.push(action.payload)
      }
    
    case UserListActionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload
      }
      
    default:
      return currentState
  }
}

export default userListReducer