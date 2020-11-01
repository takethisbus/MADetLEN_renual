$(document).ready(function(){
	//resize
	$(window).resize(function(){
		var width1=parseInt($(this).width());
		if(width1>1408){
			$("body").css("width","100%");
		}else if(width1<=1408){//bottom
			$("body").css("width","1408px");
		}else if(width1<=1304){//top
			$("body").css("width","1304px");
		}else if(width<=1280){//contents
			$("body").css("width","1280px");
		}else{
			$("body").css("width","100%");
		}
	}).resize();
	
	
    //성별 체크
   $(".gender input:radio").change(function(){
      $(".gender label").css("font-weight","");
      $(".gender label[for="+$(this).attr("id")+"]").css("font-weight","bold");
   });
    
    //컨테이너
    //이름,이메일,비밀번호
    $("#container label").after("<span class='not_re'></span>");
    
    $("#container input").focus(function(){
        $("#container label[for="+$(this).attr("id")+"]").css({"bottom":"25px","font-weight":"bold"});
        
    }).blur(function(){
        if($(this).val()==""){
            $(this).css("border-color","#ff0000");   
        }else{
            $(this).css("border-color","");         
        }
    });
    
    //이름
    
    $("#name_wrap input").blur(function(){
        var select=$(this).attr("id");
       if($(this).val()==""){
           $("."+select+"_name > .not_re").text("Please enter your "+select+" name");
       }else{
           $("."+select+"_name > .not_re").text("");
       }
    });
    
    
    //이메일
    $("#email_wrap input").keyup(function(){
        var num1=$("#email").val();
        var num2=$("#email_confirm").val();
		$("#email_wrap .not_re").text("");
        if(num1==""){
			$(".email > .not_re").text("Please enter your email").css("color","");
        }else if(num2==""){
			$(".email_confirm > .not_re").text("Please re-enter your email").css("color","");
		}else if(num2==num1){
			$(".email_confirm > .not_re").text("Correct").css("color","green");
		}else{
			$(".email_confirm > .not_re").text("Not matched").css("color","");
		}
    });
        
    
    //패스워드
	 $("#pwd_wrap input").keyup(function(){
        var num1=$("#pwd").val();
        var num2=$("#pwd_confirm").val();
		$("#pwd_wrap .not_re").text("");
        if(num1==""){
			$(".pwd > .not_re").text("Please enter your password").css("color","");
        }else if(num2==""){
			$(".pwd_confirm > .not_re").text("Please re-enter your password").css("color","");
		}else if(num2==num1){
			$(".pwd_confirm > .not_re").text("Correct").css("color","green");
		}else{
			$(".pwd_confirm > .not_re").text("Not matched").css("color","");
		}
    });
    
    
});//end