class User {
  constructor() {
    this.users = [];
    this.idCounter = 1;
  }

  create({ username, password, role }) {
    const newUser = { id: this.idCounter++, username, password, role };
    this.users.push(newUser);
    return newUser;
  }

  findByUsername(username) {
    return this.users.find(user => user.username === username);
  }
}

module.exports = new User();
