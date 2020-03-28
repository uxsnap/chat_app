let chatListId = 0;

export const addDialogueItem = ({
  photo,
  title,
  lastMessage
}) => ({
  type: 'ADD_DIALOGUE_ITEM',
  id: chatListId++,
  photo,
  title,
  message: lastMessage
});

export const removeDialogueItem = ({
  id
}) => ({
  type: 'REMOVE_DIALOGUE_ITEM',
  id
})

export const setDialogueActive = ({
  id
}) => ({
  type: 'SET_DIALOGUE_ACTIVE',
  id
})