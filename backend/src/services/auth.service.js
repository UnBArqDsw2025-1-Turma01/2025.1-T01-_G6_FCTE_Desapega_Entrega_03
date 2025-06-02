// Singleton
const bcrypt = require('bcrypt');
const { User } = require('../models');

class AuthService {
    static instance;

    static getInstance() {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    async login(strategy, credentials) {
        return strategy.authenticate(credentials);
    }
}

module.exports = AuthService;

