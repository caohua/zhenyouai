// 在Cloud code里初始化express框架
var express = require('express');
var app = express();

// App全局配置
app.set('views','cloud/views');   //设置模板目录
app.set('view engine', 'ejs');    // 设置template引擎
app.use(express.bodyParser());    // 读取请求body的中间件

//使用express路由API服务/hello的http GET请求
var curUser = AV.User.current();

var Wedding = AV.Object.extend('Wedding');
function renderIndex(res, name){
	var query = new AV.Query(Wedding);
	query.skip(0);
	query.limit(10);
	query.descending('createdAt');
	query.include("couple");
	
	query.find({
		success: function(results){
			res.render('index',{ userName: name, weddings: results});
		},
		error: function(error){
			console.log(error);
			res.render('500',500)
		}
	});

}

app.get('/index', function(req, res) {
	/* if (!curUser){
		res.redirect('/login');
		return false;
	} */
	renderIndex(res,'caohua');
});

app.get('/login',function(req,res){
	if (curUser){
		res.redirect('/index');
		return false;
	}
	res.render('login',{});
});

app.get('/register',function(req,res){
	res.render('register',{});
});

app.get('/wedding',function(req,res){
	var id = req.query.id;
	var Wedding = AV.Object.extend('Wedding');
    var query = new AV.Query(Wedding);
	query.include("couple");
	query.include("flow");
	query.include("video");
	query.include("location");

	query.get(id,{
		 success: function(wedding){
			res.render('wedding',{id:id,wedding:wedding,userName:'阿树1'});
		 }
	});
});

app.get('/category',function(req,res){
	var id = req.query.id;
	res.render('category',{id:id,userName:'阿树1'});
});

app.get('/',function(req,res){
	res.render('index',{userName:'阿树1'});
});
//最后，必须有这行代码来使express响应http请求
app.listen();
