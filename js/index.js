/**
 * Created by Administrator on 2016/8/25.
 */
jQuery(function($){
    $(window).scroll(function(){
        var top=$(document).scrollTop();
        var Harr=[];
        var anim=$(".anim");
        var L=anim.length;

        for(var i=0;i<L;i++){
            Harr[i]=anim.eq(i).offset().top-400
        }

        if(top>Harr[0]){anim.eq(0).find("li").addClass("on")}
        if(top>Harr[1]){anim.eq(1).find("li").addClass("on")}
        if(top>Harr[2]-200){anim.eq(2).addClass("on")}
        if(top>Harr[3]){anim.eq(3).find("li").addClass("on")}
    })
})