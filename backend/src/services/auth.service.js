function createAuthService() {
    async function login(strategy, credentials) {
        return strategy.authenticate(credentials);
    }

    return { login };
}

// Singleton
let authServiceInstance;

function getAuthService() {
    if (!authServiceInstance) {
        authServiceInstance = createAuthService();
    }
    return authServiceInstance;
    }

module.exports = getAuthService;



