import { v4 as uuid4 } from 'uuid'; 

export const addAsset = (dialogueId, asset) => ({
  type: "ADD_ASSET",
  dialogueId,
  assetId: uuid4(),
  asset
});


export const deleteAsset = (dialogueId, asset) => ({
  type: "DELETE_ASSET",
  dialogueId,
  asset
}); 