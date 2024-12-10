// 加载.env环境变量
require("dotenv").config({path: `.env.${process.env.NODE_ENV}`});
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const db = require("./models/index");


var apiRouter = require("./routes/api");
var usersRouter = require("./routes/users");
var mediaRouter = require("./routes/media");

var app = express();

// // 设置静态文件目录为 dist
// app.use(express.static(path.join(__dirname, 'dist')));

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/media", mediaRouter);

// 在所有其他路由处理之后添加
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// 同步数据库
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

module.exports = app;
