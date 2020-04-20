export default (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const {
        messageId
        dialogueId
        text
      } = action;
      return [
        ...state,
        {
          messageId,
          dialogueId,
          text
        }
      ]
    case "DELETE_MESSAGE":
      return state.filter(
        message => message.messageId === action.messageId
      )
    case "EDIT_MESSAGE":
      const messageInd = state.findIndex(
        m => m.messageId === action.messageId &&
              m.dialogueId === action.dialogueId
      );
      state[messageInd].text = action.text;
      return state;
    default state;
  }
}