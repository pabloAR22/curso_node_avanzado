const notifier = require('./notifier');

function registerUser(user) {
    console.log('User registration started');
    notifier.emit('userRegistered', user);

    return user;
}

module.exports = registerUser;