$(document).ready(function(){
	//search
	
	$("#search_wrap").click(function(){
		$("label",this).text("")
			.css("background-position","right center")
			.css("width","40px")
			.css("float","right");
		$("#search",this).css("display","block")
			.animate({width:150},500).focus().blur(function(){
			if($(this).val()==""){
				$(this).animate({width:0},500,function(){
					$(this).css("display","none");
					$("#search_wrap label").text("search")
							.css("background-position","left center")
							.css("width","82px")
							.css("float","");
				});
				
			}
		});
		return false;
	});
	
	
	
});//end