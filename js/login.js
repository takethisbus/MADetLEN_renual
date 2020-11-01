$(document).ready(function(){
	
	$(".login_btn").click(function(){
		$("#login_w").animate({right:0},500);
	});
	$("#cancel_btn").click(function(){
		$("#login_w").animate({right:-460},500);
	});
	
	
	$(".move_register").click(function(){
		$("#login_w,#login_wrap").stop().animate({width:"100%"},500).animate({width:"200%"},1000);
		
		var register=$(this).attr("href");
		setTimeout(function(){
			window.location=register
		},1000);
		return false;
	});
});//end