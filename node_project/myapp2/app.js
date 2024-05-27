var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//이 부분을 프로그래밍 해야 한다.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var guestbookRouter = require('./routes/guestbook');
var memberRouter = require('./routes/member');
//var guestbookRouter은 외부 모듈을 들고 온다는 뜻.

var app = express(); //서버 생성

//view engine setup
//path.join - 폴더결합, 
//__dirname: 현재 프로젝트가 작동하는 경로명이 저장된 변수
// /Users/hyewon/Kihwn/KB/WEB-WORKSPACE/node_project/myapp2/views

// view engine setup
app.set('views', path.join(__dirname, 'views')); //이곳에 html을 두게됨
app.set('view engine', 'ejs'); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //css,img,js는 public에 두게됨.

//============위치 지정을 하게 됨 ==============


//이 밑 두 줄을 수정하면 됨.
app.use('/', indexRouter);
app.use('/users', usersRouter);
//앞으로 오게 될 모든 url중에 /geustbook으로 시작하는 건 guestbookRouter가 처리하게 될 것이란 의미.
app.use('/guestbook', guestbookRouter);
app.use('/member', memberRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
