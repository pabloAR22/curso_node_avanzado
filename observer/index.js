require('./listeners/emailListener');
require('./listeners/statsListener');

const registerUser = require('./userRegistration');

const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
};

const user2 = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
}

registerUser(user);
registerUser(user2);