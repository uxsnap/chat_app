const Dialogues = require('../models/Dialogues');
const User = require('../models/User');

const addDialogue = async (users = [], messages = []) => {
	 const dialogue = new Dialogue({
		 users,
		 messages
	 });
	 
	 try {
		 await dialogue.save();
	 } catch (e) {
		 res.message = 'Problems with saving the dialogue';
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

const fetchDialogues = async (userId) => {
  const res = {
    message: '',
    status: 200,
    dialogues: []
  };
  console.log(userId);
  try {
    const userDialogues = await User
      .findById(userId)
      .populate('dialogues');
    res.dialogues = userDialogues;
    console.log(userDialogues);
  } catch (e) {
    res.message = 'Problems with fetching the dialogues';
    res.status = 500;
  }

  return res;
}

module.exports = {
  fetchDialogues
}
