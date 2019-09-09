import { createSelector } from 'reselect'

const selectChatPanel = state => state.chatPanel

export const selectIsUsersVisible = createSelector(
  [selectChatPanel],
  chatPanel => chatPanel.isUsersVisible
)

export const selectMessages = createSelector(
  [selectChatPanel],
  chatPanel => chatPanel.messages
)