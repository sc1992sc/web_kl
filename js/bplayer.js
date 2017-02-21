// JavaScript Document
jQuery(function($){
	var index = 1;
    var maximg = $("#myjQueryContent>div").length;
    var nav=$("#myjQueryNav ul");

    for(var i=0;i<maximg;i++){
        nav.append("<li></li>")
    }
    nav.find("li").eq(0).addClass("current");

	//滑动导航改变内容	
	$("#myjQueryNav li").hover(function(){
		if(MyTime){
			clearInterval(MyTime);
		}
		index  =  $("#myjQueryNav li").index(this);
		MyTime = setTimeout(function(){
		ShowjQueryFlash(index);
		$('#myjQueryContent').stop();
		} , 400);

	}, function(){
		clearInterval(MyTime);
		MyTime = setInterval(function(){
		ShowjQueryFlash(index);
		index++;
		if(index==maximg){index=0;}
		} , 3000);
	});
	//自动播放
	var MyTime = setInterval(function(){
		ShowjQueryFlash(index);
		index++;
		if(index==maximg){index=0;}
	} , 3000);
});
function ShowjQueryFlash(i) {
$("#myjQueryContent>div").eq(i).animate({opacity: 1},1000).css({"z-index": "1"}).siblings().animate({opacity: 0},1000).css({"z-index": "0"});
$("#myjQueryNav li").eq(i).addClass("current").siblings().removeClass("current");
}
