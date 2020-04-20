export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ASSET":
      const {
        dialogueId,
        assetId,
        asset
      } = action;
      return [
        ...state,
        {
          ...asset,
          assetId,
          dialogueId
        }
      ]
    case "DELETE_ASSET":
      return state.filter(
        asset => asset.assetId === action.assetId
      );
    default:
      return state;
  }
}