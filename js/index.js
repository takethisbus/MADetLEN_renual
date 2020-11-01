$(document).ready(function(){
//	window.onload = function () { 
//
//	var elm = ".mainmove";
//	$(elm).each(function (index) {
//		// 개별적으로 Wheel 이벤트 적용
//		$(this).on("mousewheel DOMMouseScroll", function (e) {
//			e.preventDefault();
//			var delta = 0;
//			if (!event) event = window.event;
//			if (event.wheelDelta) {
//				delta = event.wheelDelta / 120;
//				if (window.opera) delta = -delta;
//			} else if (event.detail)
//				delta = -event.detail / 3;
//			var moveTop = $(window).scrollTop();
//			var elmSelecter = $(elm).eq(index);
//			// 마우스휠을 위에서 아래로
//			if (delta < 0) {
//				if ($(elmSelecter).next() != undefined) {
//					try{
//						moveTop = $(elmSelecter).next().offset().top;
//					}catch(e){}
//				}
//				// 마우스휠을 아래에서 위로
//			} else {
//				if ($(elmSelecter).prev() != undefined) {
//					try{
//						moveTop = $(elmSelecter).prev().offset().top;
//					}catch(e){}
//				}
//			}
//	
//	// 화면 이동 0.8초(800)
//			$("html,body").stop().animate({scrollTop: moveTop + 'px'},{duration: 800, complete: function (){}
//			});
//		});
//	});
//	}//each function
	
	//new_main5
	//viewmore
	function loop1(){
		$(".viewmore a img")
			.animate({marginLeft:"5px"},500,"easeOutBounce")
			.animate({marginLeft:"0px"},500,"linear",loop1);
	}

	
	$(".main5_roomspray .viewmore a").hover(function(){
		$(".viewmore a img").css({"transform":"rotate(38deg)","transform-origin":"right bottom"});
		loop1();
	},function(){
		$(".viewmore a img").css({"transform":"","transform-origin":""}).stop(loop1);
	});
	
	
	//main6
	//add to cart
	$(".addcart").click(function(){
		$(".right_fix").show();
		return false;
	});
	
});//end