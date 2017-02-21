/**
 * Created by Administrator on 2016/8/23.
 */
$("#backup").on("click",function(){
    Srcoll(0);return false;
});
function Srcoll(st){
    $("html,body").animate({scrollTop: st + "px"},"slow");
}
$(document).ready(function(){
    var arr=[];
    var L= $(".zindex").length;
    for(var i=0;i<L;i++){
        arr[i]=$(".zindex").eq(i).offset().top-70;
    }
    $(window).scroll(function(){
        var top=$(document).scrollTop();
        if(top>200){
            $(".header-b").addClass("active");
            $("#menu").addClass("on")
        }
        switch (true){
            case top<200:
                $(".header-b").removeClass("active");
                break;
            case top>arr[0]&&top<arr[1]:
                $("#menu").find("li").eq(0).addClass("active").siblings().removeClass("active");
                break;
            case L>2?top>arr[1]&&top<arr[2]:top>arr[1]:
                $("#menu").find("li").eq(1).addClass("active").siblings().removeClass("active")
                break;
            case L>3?top>arr[2]&&top<arr[3]:top>arr[2]:
                $("#menu").find("li").eq(2).addClass("active").siblings().removeClass("active")
                break;
            case L>4?top>arr[3]&&top<arr[4]:top>arr[3]:
                $("#menu").find("li").eq(3).addClass("active").siblings().removeClass("active")
                break;
            case top>arr[4]:
                $("#menu").find("li").eq(4).addClass("active").siblings().removeClass("active")
                break;
            case top<arr[0]:
                $("#menu").removeClass("on").find("li").removeClass("active");
                break;
        }
    })
})