class AdminUser {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.password = data.password;
    this.role = 'admin';
  }

  permissions() {
    return ['create', 'read', 'update', 'delete', 'manageUsers', 'manageTrades'];
  }

  toDbObject() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password,
      role: this.role
    };
  }
}

class RegularUser {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.password = data.password;
    this.role = 'user';
  }

  permissions() {
    return ['read', 'createTrades'];
  }

  toDbObject() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password,
      role: this.role
    };
  }
}

class UserFactory {
  static createUser(data) {
    if (data.role === 'admin') {
      return new AdminUser(data);
    }
    return new RegularUser(data);
  }
}

module.exports = UserFactory;