const Message = require('../models/Message');
const Dialogue = require('../models/Dialogue');

const addMessage = async (dialogueId, fromUser, message, date) => {
  const res = {
    status: 200,
    message: '',
  }
  try {
    const m = new Message({
      dialogueId,
      fromUser,
      message,
      date
    });

    await m.save();

    await Dialogue.findByIdAndUpdate(
      dialogueId,
      { $push: { messages:  m._id  } },
      {new: true, useFindAndModify: false}
    );
  } catch (e) {
    console.error(e);
    res.status = 500;
    res.message = 'Problems with sending the message';
  }

  return res;
}

const addMessages = async (userId, dialogueId, messages = []) => {
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

const deleteMessage = async (messageId) => {
  const res = {message: '', status: 200};

  try {
    await Message.deleteOne({_id: messageId});
  } catch (e) {
    res.status = 500;
    res.message = 'Problems with deleting the message';
  }

  return res;
};


const editMessage = async (messageId, text) => {
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


module.exports = {
  addMessage
}