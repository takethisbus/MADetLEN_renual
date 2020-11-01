$(document).ready(function(){
	
	//oil tab 메뉴
	$(".oil_type button:first").css("color","#ffffff");
	
	$(".oil_type button").click(function(){
		$(".oil_type button").css("color","");
		$(this).css("color","#ffffff");
	});
	
	$(".oil_type button:eq(0)").click(function(){
		$(".scent_15ml").show();
		$(".scent_30ml,.scent_50ml").hide();
	});
	$(".oil_type button:eq(1)").click(function(){
		$(".scent_30ml").show();
		$(".scent_15ml,.scent_50ml").hide();
	});
	$(".oil_type button:eq(2)").click(function(){
		$(".scent_50ml").show();
		$(".scent_30ml,.scent_15ml").hide();
	});
	
	
	
});//end
