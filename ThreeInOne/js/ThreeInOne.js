/**
 * Created by Administrator on 2017/4/13.
 */
window.onload=function(){
    var bottom = document.getElementById("bottom");
    var img1 = document.getElementById("img1");
    var bigimg = document.getElementById("bigimg");
    var libox = document.getElementById("imgli");
    var childli = libox.children[0].children;
    var beginx = 0;
    var current = 0;
    var magnifybox = document.getElementById("magnifybox");
    var magnify = document.getElementById("magnify");
    var srcid = 1;
    bigimg.onmouseover = function(event){
        event = event || window.event;
        magnifybox.style.display = "block";
        magnify.style.display = "block";
    }
    bigimg.onmouseout = function(event){
        event = event || window.event;
        magnifybox.style.display = "none";
        magnify.style.display = "none";
    }
    for(var i = 0;i < childli.length;i++){
        var li = childli[i];
        li.onmouseover = function(event){
            event = event || window.event;
            var src = event.srcElement;
            srcid = src.id;
            if(srcid == 1){
                current = 0;
            }else if(srcid == 2){
                current = (-200);
            }else if(srcid == 3){
                current = (-400);
            }else if(srcid == 4){
                current = (-600);
            }else if(srcid == 5){
                current = (-800);
            }
        }
    }

    bigimg.onmousemove = function (event) {
        var x = event.clientX - 300 - magnifybox.offsetWidth/2;
        var y = event.clientY - 100 - magnifybox.offsetHeight/2;
        //考虑边界问题
        if(x<0){
            x=0;
        }else if(x>bigimg.offsetWidth-magnifybox.offsetWidth){
            x = bigimg.offsetWidth-magnifybox.offsetWidth;
        }
        if(y<0){
            y=0
        }else if(y>bigimg.offsetHeight-magnifybox.offsetHeight){
            y = bigimg.offsetHeight-magnifybox.offsetHeight;
        }
        magnifybox.style.left = x+"px";
        magnifybox.style.top = y +"px";
        //修改大图背景的位置
        var bgisrc =  "image/img" + srcid + ".jpg";
        magnify.style.backgroundImage =  "url(" + bgisrc + ")";
        magnify.style.backgroundRepeat = "no-repeat";
        var bgx = -x * 400/200;
        var bgy = -y * 400/200;
        magnify.style.backgroundPosition = bgx+"px "+bgy+"px";
    }

    window.setInterval( function(){
        beginx = beginx + (current - beginx)/50;
        img1.style.backgroundPositionX = beginx+"px";
    });
}