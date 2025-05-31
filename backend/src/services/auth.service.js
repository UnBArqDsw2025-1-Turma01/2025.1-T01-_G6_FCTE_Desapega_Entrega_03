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

    
}

module.exports = AuthService;

