const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const echo = require("./api/echo/Echo");
const token = require("./api/token/token");
const bot = require("./api/bot/bot");
const app = express();
//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/echo", echo);
app.use("/api/token", token);
app.use("/api/bot", bot);

app.listen(9090, () => console.log("server running on port 9090 ..."));
