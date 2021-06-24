const Sequelize = require('sequelize');
const db = require('../db');

const SALT_ROUNDS = 5;

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  githubId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = User;
