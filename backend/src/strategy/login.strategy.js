function notImplemented() {
    throw new Error('Função de autenticação não implementada');
}

module.exports = {
    authenticate: notImplemented
};
