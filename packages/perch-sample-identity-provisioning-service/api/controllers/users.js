'use strict';

module.exports = {
    listUsers: listUsers
};

function listUsers(req, res) {
    // this sends back a JSON response which is a single string
    res.json([{ id: "123", "name": "Bob" }]);
}
