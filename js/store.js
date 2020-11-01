$(document).ready(function(){
	//팝업
	$("#store_popup").hide();
	$(".more_detail").click(function(){
		$("#store_popup").fadeIn();
		$("#layer").fadeIn("fast");
	});
	
	$(".popup_close").hover(function(){
		$(this).animate({color:"#ffffff"},500).animate({color:"#000000"},500);
	}).click(function(){
		$("#layer").fadeOut("slow");
		$("#store_popup").fadeOut();
	});
	
	//모달태그 추가
	$("body").append("<div id='layer'></div>");
	$("#layer").hide();
	
	
	//country select
	$("#country option").hide();
	$("#continent").change(function(){
		var continent=$(this).val();
		$("#country option").hide();
		$("#country option."+continent).show();	
	});
});