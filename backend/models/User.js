const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
  name: DataTypes.STRING(100),
  email: DataTypes.STRING(100),
  pass: DataTypes.STRING(128)
})

module.exports = User;