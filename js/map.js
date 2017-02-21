/**
 * Created by Administrator on 2016/3/23.
 */

function initialize() {

    //---------------------------------------------基础示例---------------------------------------------

    var map = new BMap.Map("allmap",{minZoom:12,maxZoom:19});  // 创建Map实例

    var point=new BMap.Point(120.451678,30.867034);

    map.centerAndZoom(point,19);                     // 初始化地图,设置中心点坐标和地图级别。

    map.enableScrollWheelZoom(true);//鼠标滑动轮子可以滚动

    var icon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(48, 25), {

        offset: new BMap.Size(10, 25),

        imageOffset: new BMap.Size(25,0)});

    var marker=new BMap.Marker(point,{icon:icon}); // 创建标注

    map.addOverlay(marker);                     // 将标注添加到地图中

    var infoWindow = new BMap.InfoWindow("<p>" +

        "</p><p style='font-size:12px;'>欢迎光临<b> 苏州凯龙木业有限公司 </b></p>" +

        "<p style='font-size:12px;'>电话：400-156-30881</p><br/>" +

        "<p style='font-size:12px;'>地址:苏州市吴江区桃源镇青云开发区 </p>");  // 创建信息窗口对象

    marker.addEventListener("click", function(){        //给标注添加点击事件

        this.openInfoWindow(infoWindow);

    });

}

function loadScript() {

    var script = document.createElement("script");

    script.src = "http://api.map.baidu.com/api?v=1.4&callback=initialize";

    document.body.appendChild(script);

}
