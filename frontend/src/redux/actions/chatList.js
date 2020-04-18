import { v4 as uuidv4 } from 'uuid';

export const addDialogueItem = ({
  photo,
  name,
  date,
  lastMessage
}) => ({
  type: 'ADD_DIALOGUE_ITEM',
  id: uuidv4(),
  photo,
  name,
  date,
  message: lastMessage
});

export const removeDialogueItem = ({
  id
}) => ({
  type: 'REMOVE_DIALOGUE_ITEM',
  id
});

export const chooseMessage = ({
  id
}) => ({
  type: 'SET_DIALOGUE_ACTIVE',
  id
});

export const setSearchValue = ({
  value
}) => ({
  type: "SET_SEARCH_VALUE",
  value
});