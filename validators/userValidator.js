function validateUserInput(data) {
  const errors = {};
  if (!data.username || data.username.trim() === '') errors.username = 'Username is required';
  if (!data.password || data.password.length < 6) errors.password = 'Password must be at least 6 characters';
  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}

module.exports = { validateUserInput };
