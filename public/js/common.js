$('.btn').bind('click',function(){
    var txt = $(this).text();
    var load = $(this).attr('data-loading-text');
	if (load){
		$(this).text(load);
		$(this).attr('disabled','disabled');
		var btn = $(this);
		setTimeout(function(){
			btn.removeAttr('disabled');
			btn.text(txt);
		},3000);
	}
});

function setDoingStatus(dom){
	var txt = $(dom).text();
    var load = $(dom).attr('data-loading-text');
	if (load){
		$(dom).text(load);
		$(dom).attr('disabled','disabled');
		var btn = $(dom);
		setTimeout(function(){
			btn.removeAttr('disabled');
			btn.text(txt);
		},3000);
	}
}

function createTpl(str, cfg) {
	var _re = /(%([\w]+?)%)/g;
	
	return str.replace(_re, function() {
		var _val = cfg[arguments[2]]+'';
		if(typeof _val == 'undefined') {
			_val = '';
		}
		return _val;
	});
}

AV.initialize("fe8r9l7ml0ib0ycsh03olv9qcxtay51v3jdtbg5u78m4s7vr", "r345znn0o1c3mfx11u49rn5mwqsty5h0xfb3pe3u3rumzbt2");
var user = AV.User.current();
if (user) {
	var tpl = ['<li class="dropdown">',
				'<a data-toggle="dropdown" class="dropdown-toggle" href="#" id="username">%username%<strong class="caret"></strong></a>',
				'<ul class="dropdown-menu">',
					'<li><a href="./user?id=%id%">用户简介</a></li>',
					'<li><a href="./password?id=%id%">修改密码</a></li>',
					'<li><a href="./other?id=%id%">其他</a></li>',
					'<li class="divider"></li>',
					'<li><a href="./login">退出</a></li>',
				'</ul>',
			  '</li>'
			  ].join('');
var html = createTpl(tpl,{username:user.get('username'),id:user.id});
$('#user_info_box').append($(html));
} else {
	location.href = './login';
}
