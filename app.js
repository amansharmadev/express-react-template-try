const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { Sequelize } = require("sequelize");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const apiRouter = require("./routes/api");

const app = express();

// view engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine(
  "jsx",
  require("express-react-views").createEngine({ beautify: true })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use("*", function (req, res) {
  res.status(404);
  res.render("404", { path: req.baseUrl });
});

// error handler
app.use(function (error, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get("env") === "development" ? error : {};

  // render the error page
  res.status(error.status || 500);
  // res.render("error");
  res.render("error");
});

module.exports = app;
