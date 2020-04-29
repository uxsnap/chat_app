const faker = require("faker");
const mongoose = require("mongoose");
const User = require("../models/User");
const generateRandomPeer = require('../helpers/generateRandomPeer');
const { resolve } = require('path');

require('dotenv').config({
  path: resolve('../.env')
});

const connectStr = 'mongodb+srv://' +
  process.env.DB_USER + ':' +
  process.env.DB_PASS +
  '@' + process.env.DB_CLUSTER + '.mongodb.net/' + process.env.DB_NAME +
  '?retryWrites=true&w=majority';

console.log(connectStr);

const addUsers = async () => {
  try {
    await mongoose.connect(connectStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const users = [];
    const userQuan = 100;

    for (let i = 0; i < userQuan; i += 1) {
      const name = faker.name.firstName();
      const peer = generateRandomPeer();
      const newUser = {
        email: faker.internet.email(name),
        name,
        pass: `${peer}123`,
        peerId: peer,
        dialogues: [],
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
  } catch (e) {
    console.error(e);
  }
}

const addDialogues = async () => {
  try {
    const dialogues = [];
    const dQuan = 100;

    for (let i = 0; i < dQuan; i++) {
    }

  } catch (e) {
    console.error(e);
  }
}

addUsers();

