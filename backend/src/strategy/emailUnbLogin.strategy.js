const { User } = require('../models');
const bcrypt = require('bcrypt');

async function authenticate({ email, password }) {
    if (!email.endsWith('unb.br')) {
        throw new Error('Apenas emails da UnB são permitidos.');
    }

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Email ou senha inválidos.');
    }

    return user;
}

module.exports = { authenticate };