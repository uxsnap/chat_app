const User = require('../models/User');

const handleUserSearch = async (val) => {
  const res = { 
    status: 200,
    message: '',
    data: { users: [] }
  };
  
  try {
    res.data.users = await User.findByNameOrPeerId(val);
  } catch (e) {
    res.status = 500;
    res.message = 'Problems with fetching the users';
  }

  return res;
};


module.exports.handleUserSearch = handleUserSearch;
