const { registerUser, authenticateUser } = require('../services/userService');

async function register(req, res) {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(err.status || 500).json({ success: false, errors: err.errors || err.message });
  }
}

async function login(req, res) {
  try {
    const { user, token } = await authenticateUser(req.body);
    res.json({ success: true, data: { user, token } });
  } catch (err) {
    res.status(err.status || 500).json({ success: false, errors: err.errors || err.message });
  }
}

module.exports = { register, login };
