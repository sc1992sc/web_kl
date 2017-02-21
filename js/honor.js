/**
 * Created by Administrator on 2016/6/29.
 */
jQuery(function(){
    $("#honorList").each(function(){

        var Idx=$(this).find("li").length;

        var col=Math.floor(Idx/3);

        var row=Math.floor(Idx/2);

        var t=0;

        var end=Idx%2;

        var prev=$("#prev");
        var next=$("#next");
        var ul=$(this).find("ul");

        if(Idx<6){

            prev.css("display","none");

            next.css("display","none");

        }

        $(this).find("ul").css({"width":row*390+"px","height":"630px","position":"relative"});

        for(var i=0;i<row;i++){

            for(var j=0;j<col;j++){

                $(this).find("li").eq(j+2*i).css({

                    "top":0+j*324+"px",

                    "left":0+i*390+"px"

                });

            }

        }

        if(end==1){

            $(this).find("li").last().css({

                "left":row*390+"px",

                "top":"0"

            });

            row+=1;

        }else if(end==2){

            $(this).find("li").last().css({

                "left":row*390+"px",

                "top":"324px"

            }).prev().css({

                "left":row*390+"px",

                "top":"0"

            });

            row+=1;

        }



       next.click(function(){

            t++;

            if(t>row/3-1){t=row/3-1}

           ul.animate({"marginLeft":-390*3*t+"px"})

        });

        prev.click(function(){

            t--;

            if(t<0){t=0}

            ul.animate({"marginLeft":-390*3*t+"px"})

        })

    });
})
