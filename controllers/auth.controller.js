const res = require("express/lib/response");

function getSignup() {
	res.render("signup");
}

function getLogin() {
	res.render("login");
}

module.exports = { 
    getSignup: getSignup, 
    getLogin: getLogin 
};
