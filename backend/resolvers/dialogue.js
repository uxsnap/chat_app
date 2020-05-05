const Dialogue = require('../models/Dialogue');
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
    data: {
      dialogues: []  
    }
  };
  try {
    const dialogues = await Dialogue
      .find({fromUser: userId});
    const dialoguesWithUsers = [];
    for (const d of dialogues) {
      const u = await User.findById(d.toUser);
      dialoguesWithUsers.push(
        {
          toUser: d.toUser,
          fromUser: d.fromUser,
          messages: d.messages,
          id: d._id,
          user: { name: u.name, photo: u.photo}
        }
      );
    }
    res.data.dialogues = await Promise.all(dialoguesWithUsers);
  } catch (e) {
    res.message = 'Problems with fetching the dialogues';
    res.status = 500;
  }

  return res;
};

const openDialogue = async (userId, id) => {
  const res = {
    message: '',
    status: 200,
    data: {
      messages: []
    }
  };

  try {
    let dialogue = await Dialogue
      .findOne({fromUser: userId, toUser: id});
    
    if (!dialogue) {
      dialogue = new Dialogue({
        messages: [],
        fromUser: userId,
        toUser: id
      });
      await dialogue.save();
    }
    
    res.data = dialogue
      .populate('messages');
    res.data.toUser = id;
    res.data.fromUser = userId;
  } catch (e) {
    console.error(e);
    res.status = 500;
    res.message = 'Something went wrong';
  }

  return res;
};

module.exports = {
  fetchDialogues,
  openDialogue
}
