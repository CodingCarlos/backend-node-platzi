const store = require('./store');

function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name');
    }

    const user = {
        name,
    };
    return store.add(user);
}

function listUsers() {
    return store.list();
}

module.exports = {
    addUser,
    listUsers,
}