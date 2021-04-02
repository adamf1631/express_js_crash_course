const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", require("./routes/api/posts"));

//serve up static html and css files
// app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server is running on port: ${port}`));
