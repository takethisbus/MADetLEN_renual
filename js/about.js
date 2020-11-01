$(document).ready(function(){
	
	
	
	
	$("#about_right").on("mousewheel",function(event,delta){

		if(delta>0){
			$("#about_right").scrollTop($("#about_right").scrollTop()-50);
			
		}else{
			$("#about_right").scrollTop($("#about_right").scrollTop()+50);
		}
		
		return false;
	});
	
});//end