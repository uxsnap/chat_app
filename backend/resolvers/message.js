const Message = require('../models/Message');

export const addMessages = async (userId, dialogueId, messages = []) => {
	try { 
    await Message.insertMany({
	  	 user: userId,
		   dialogue: dialogueId,
		   messages
	   });
	} catch (e) {
		 res.message = 'Problems with saving the message';
		 res.status = 500;
	}
	 
  return res;
}

export const deleteMessage = async (messageId) => {
  const res = {message: '', status: 200};

  try {
    await Message.deleteOne({_id: messageId});
  } catch (e) {
    res.status = 500;
    res.message = 'Problems with deleting the message';
  }

  return res;
};


export const editMessage = async (messageId, text) => {
	const res = {message: "", status: 200};
	try {
		await Message.findByIdAndUpdate(
			{_id: messageId},
			{ text },
			{ upsert: true, new: true }
		);
	} catch (e) {
		res.message = 'Problems with editing the message';
		res.status = 500;
	}
	
	return res;
}
