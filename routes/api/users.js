const login = (req, res, next) => {
	console.log(`User Auth from ${req.get("host")}`);
	next();
};

module.exports = login;
