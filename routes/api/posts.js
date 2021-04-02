const express = require("express");
const app = express();
const router = express.Router();
const login = require("./users");

app.use(login);

const Posts = require("../../posts.json");

router.get("/", login, (req, res) => {
	res.status(200).json(Posts);
});

router.post("/", (req, res) => {
	const { title, body } = req.body;

	const newPost = {
		title,
		body,
	};

	let sent = Posts.push(newPost);
	if (sent) {
		res.status(200).json(Posts);
	}
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
