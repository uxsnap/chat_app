const Message = require('../models/Message');

export const addMessage = async (userId, dialogueId, text) => {
	 const message = new Message({
		 user: userId,
		 dialogue: dialogueId,
		 text
	 });
	 
	 try {
		 await message.save();
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
