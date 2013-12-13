// 在Cloud code里初始化express框架
var express = require('express');
var app = express();

// App全局配置
app.set('views','cloud/views');   //设置模板目录
app.set('view engine', 'ejs');    // 设置template引擎
app.use(express.bodyParser());    // 读取请求body的中间件

//使用express路由API服务/hello的http GET请求
app.get('/index', function(req, res) {
  res.render('index', {userName:'阿树1'});
});

app.get('/login',function(req,res){
	res.render('login',{});
});

app.get('/register',function(req,res){
	res.render('register',{});
});

app.get('/wedding',function(req,res){
	res.render('wedding',{userName:'阿树1'});
});

app.get('/',function(req,res){
	res.render('index',{userName:'阿树1'});
});
//最后，必须有这行代码来使express响应http请求
app.listen();