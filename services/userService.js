const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');
const { validateUserInput } = require('../validators/userValidator');

async function registerUser(data) {
  const { isValid, errors } = validateUserInput(data);
  if (!isValid) throw { status: 400, errors };

  const existingUser = UserModel.findByUsername(data.username);
  if (existingUser) throw { status: 409, errors: { username: 'Username already taken' } };

  const hashedPassword = await bcrypt.hash(data.password, 10);
  return UserModel.create({ username: data.username, password: hashedPassword, role: data.role || 'user' });
}

async function authenticateUser(data) {
  const { isValid, errors } = validateUserInput(data);
  if (!isValid) throw { status: 400, errors };

  const user = UserModel.findByUsername(data.username);
  if (!user) throw { status: 401, errors: { username: 'User not found' } };

  const match = await bcrypt.compare(data.password, user.password);
  if (!match) throw { status: 401, errors: { password: 'Invalid password' } };

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
  return { user, token };
}

module.exports = { registerUser, authenticateUser };
