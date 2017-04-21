window.onload = function () {
    //获取对象
    var adv = $("adv");
    var dir = $("dir");
    var content = $("content");
    var contentChildren = content.children;
    var climb = $("climb");
    var cilmbChildren = climb.children;

    //设置内容区域及爬楼导航颜色
    var liCurrent = 0;
    var srcInterLi = null;
    var colors = ["red","blue","yellow","orange","green","white"];
    for(var i = 0;i<contentChildren.length;i++){
        contentChildren[i].style.backgroundColor = colors[i];
        cilmbChildren[i].style.backgroundColor = colors[i];
        //给li元素一个索引值
        cilmbChildren[i].index = i;
        //跳转准备
        //绑定事件
        cilmbChildren[i].onclick = function(event){
            event = event || window.event;
            var li = event.srcElement;
            //找到点击对应的li元素
            var index = li.index;
            //找到点击对应的内容区域
            var contentLi = contentChildren[index];
            //滑动到对应的内容区域
            var liTarget = contentLi.offsetTop;
            clearInterval(srcInterLi);
            srcInterLi = setInterval(function(){
                liCurrent = liCurrent +(liTarget-liCurrent)/10;
                window.scrollTo(0,liCurrent);
                if(Math.abs(liTarget-liCurrent) < 2){
                    clearInterval(srcInterLi);
                }
            },20)
        }
    }

    var advTop = adv.offsetTop;
    var srcInter = null;

    //当前的位置
    var current = 0;

    window.onscroll = function () {
        var topy = sctop();
        //滑动情况下出现滚动条
        if (topy > 200) {
            dir.style.display = "block";
            dir.style.opacity = (topy - 200) / 500;
            dir.style.filter = "alpha(opacity = " + parseInt((topy - 200) / 5) + ")";
        } else {
            dir.style.display = "none";
        }
        //广告弹动效果
        var target = topy + advTop;
        clearInterval(srcInter);
        srcInter = setInterval(function(){
            if(Math.abs(target-current) < 2){
                clearInterval(srcInter);
            }
            current = current +(target-current)/20;
            adv.style.top = current+"px";
        },20);
    }

}
