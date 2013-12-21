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