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