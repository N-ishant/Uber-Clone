const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectToDB = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();

connectToDB();

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRoutes);
app.use("/captain", captainRoutes);

module.exports = app;