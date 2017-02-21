/* This is jQuery Map
 * HuangGuoQing
 * Changed: 2014/11/18
 */
$(document).ready(function () {
    Map();
});
function Map(mapId,shwId) {
    /*
     * 配置Raphael生成svg的属性
     */
    $("#map").html("");
    Raphael.getColor.reset();
    var R = Raphael("map", 650, 500); //大小与矢量图形文件图形对应；

    var current = null;
    //定义地图上显示文本属性
    var textAttr = {
        "fill": "#333",
        "font-size": "12px",
        "cursor": "pointer"
    };

	 var textAttr1 = {
        "fill": "#fff",
        "font-size": "12px",
        "cursor": "pointer"
    };

    //调用绘制地图方法
    paintMap(R);
    for (var state in china) {
        //分省区域着色
        china[state]['path'].color = Raphael.getColor(0.9);
        //china[state]['path'].animate({fill: china[state]['path'].color, stroke: "#eee" }, 500);
        china[state]['path'].transform("t30,0");

        (function (st, state) {
            //***获取当前图形的中心坐标
            var xx = st.getBBox().x + (st.getBBox().width / 2);
            var yy = st.getBBox().y + (st.getBBox().height / 2);

            //***修改部分地图文字偏移坐标
            switch (china[state]['name']) {
                case "江苏":
                    xx += 5;
                    yy -= 10;
                    break;
                case "河北":
                    xx -= 10;
                    yy += 20;
                    break;
                case "天津":
                    xx += 20;
                    yy += 10;
                    break;
                case "上海":
                    xx += 16;
                    break;
                case "广东":
                    yy -= 10;
                    break;
                case "澳门":
                    yy += 10;
                    break;
                case "香港":
                    xx += 20;
                    yy += 5;
                    break;
                case "甘肃":
                    xx -= 40;
                    yy -= 30;
                    break;
                case "陕西":
                    xx += 5;
                    yy += 20;
                    break;
                case "内蒙古":
                    xx -= 15;
                    yy += 65;
                    break;
                default:
            }

            //**写入地名,并加点击事件,部分区域太小，增加对文字的点击事件
            china[state]['text'] = R.text(xx, yy, china[state]['name']).attr(textAttr).click(function () {
                clickMap();
               // $("#search_con").html(china[state]['name']);
                
                
               // window.location = "/mendain.php?shen=" +china[state]['name'];                
                // window.location = "/join/jmwl/" + ToPinYin() + "/index.html";
               // $("#t").load(ToPinYin()+".html");
             
                var Url = "/search.php?action=map_search&province=" +encodeURI(china[state]['name']);	
               // $("#search_con").html(Url);
    			$.get(Url,function(data,status){
    				
    				Data = data;	
    				//alert (Data[1]);	
    				$("#search_con").html(data);	
    			});

            });

            //图形的点击事件
            $(st[0]).click(function (e) {
                clickMap();
               // $("#search_con").html(china[state]['name']);
               // window.location = "/city.php?name=" +china[state]['name'];
               // window.location = "/join/jmwl/" + ToPinYin() + "/index.html";
              //  $("#t").load(ToPinYin()+".html");
				//var Url = "/search.php?action=map_search&province=" +china[state]['name'];	
    			var Url = "/search.php?action=map_search&province=" +encodeURI(china[state]['name']);	
    			$.get(Url,function(data,status){
    				
    				Data = data;	
    				//alert (Data[1]);	
    				$("#search_con").html(data);	
    			});
            });
            //鼠标样式
            $(st[0]).css('cursor', 'pointer');
            function clickMap() {
                $("#layout").fadeIn()
                if (current == state)
                    return;
                //重置上次点击的图形
                current && china[current]['path'].animate({
                    transform: "t30,0",
                    fill: china[current]['isClick'] ? china[current]['path'].color : "#e9e9e9",
                    stroke: "#c9c8c8"
                    
                }, 2000, "elastic");

                current = state;    //将当前值赋给变量
                //对本次点击
                china[state]['path'].animate({
                    transform: "t30,0 s1.03 1.03",
                    fill: china[state]['path'].color,
                    fill: "#00a96a",
                    stroke: "#c9c8c8",
                }, 1200, "elastic");
                st.toFront();   //向上
                R.safari();
               

                china[current]['text'].toFront();   //***向上

                if (china[current] === undefined) return;

                $("#topList").find("[title='" + china[current]['name'] + "']").click();
            }

            //将省份中文转换为pinyin
            function ToPinYin(){
                switch (china[state]['name']) {
                    case "北京":
                        return "beijing";
                        break;
                    case "上海":
                        return "shanghai";
                        break;
                    case "天津":
                        return "tianjin";
                        break;
                    case "重庆":
                        return "chongqing";
                        break;
                    case "黑龙江":
                        return "heilongjiang";
                        break;
                    case "吉林":
                        return "jilin";
                        break;
                    case "辽宁":
                        return "liaoning";
                        break;
                    case "内蒙古":
                        return "neimenggu";
                        break;
                    case "河北":
                        return "hebei";
                        break;
                    case "新疆":
                        return "xinjiang";
                        break;
                    case "甘肃":
                        return "gansu";
                        break;
                    case "青海":
                        return "qinghai";
                        break;

                    case "陕西":
                        return "shannxi";
                        break;
                    case "宁夏":
                        return "ningxia";
                        break;
                    case "河南":
                        return "heinan";
                        break;
                    case "山东":
                        return "shandong";
                        break;
                    case "山西":
                        return "shanxi";
                        break;
                    case "安徽":
                        return "anhui";
                        break;
                    case "湖北":
                        return "hubei";
                        break;
                    case "湖南":
                        return "hunan";
                        break;
                    case "江苏":
                        return "jiangsu";
                        break;
                    case "四川":
                        return "sichuan";
                        break;
                    case "贵州":
                        return "guizhou";
                        break;
                    case "云南":
                        return "yunnan";
                        break;

                    case "广西":
                        return "guangxi";
                        break;
                    case "西藏":
                        return "xizang";
                        break;
                    case "浙江":
                        return "zhejiang";
                        break;
                    case "江西":
                        return "jiangxi";
                        break;
                    case "广东":
                        return "guangdong";
                        break;
                    case "福建":
                        return "fujian";
                        break;
                    case "台湾":
                        return "taiwan";
                        break;
                    case "海南":
                        return "hainan";
                        break;
                    case "香港":
                        return "xianggang";
                        break;
                    case "澳门":
                        return "aomen";
                        break;
                    default:
                }
            }
        })

        (china[state]['path'], state);
    }
}