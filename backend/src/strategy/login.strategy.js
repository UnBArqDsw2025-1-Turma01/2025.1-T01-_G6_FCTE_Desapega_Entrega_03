class LoginStrategy {
    async authenticate(credentials) {
        throw new Error('Método authenticate() deve ser implementado pela subclasse');
    }
}

module.exports = LoginStrategy;
