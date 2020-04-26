const faker = require("faker");
const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.connect("mongodb://localhost:27017/chatTestDb", {
  useNewUrlParser: true
});

const users = [];
const userQuan = 100;

for (let i = 0; i < userQuan; i += 1) {
  const name = faker.name.firstName();
  const newUser = {
    email: faker.internet.email(name),
    name,
    pass: "password123",
    messages: [],
    resetPassToken: null,
    resetPassExpires: null
  };
  users.push(newUser);

  // visual feedback always feels nice!
  console.log(newUser.email);
}

User.insertMany(users, function(err, res) {
  if (err) console.error(err);
  else console.log(res);
});
