import { createSelector } from 'reselect'

const selectUserList = state => state.userList

export const selectCurrentUser = createSelector(
  [selectUserList],
  userList => userList.currentUser  
)

export const selectUsers = createSelector(
  [selectUserList],
  userList => userList.users
)