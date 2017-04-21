/**
 * Created by Administrator on 2017/4/14.
 */
function sctop(){
    return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0;
}

function scleft(){
    return document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || 0;
}

function $(name){
    return document.getElementById(name);
}