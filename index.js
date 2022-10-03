var result

var btn_1=document.getElementById("btn_1")
var btn_2=document.getElementById("btn_2")
var btn_3=document.getElementById("btn_3")
var btn_4=document.getElementById("btn_4")
var btn_5=document.getElementById("btn_5")
var btn_6=document.getElementById("btn_6")
var btn_7=document.getElementById("btn_7")
var btn_8=document.getElementById("btn_8")
var btn_9=document.getElementById("btn_9")
var btn_add=document.getElementById("btn_add")
var btn_sub=document.getElementById("btn_sub")
var btn_mult=document.getElementById("btn_mult")
var btn_div=document.getElementById("btn_div")
var btn_equal=document.getElementById("btn_equal")

btn_1.addEventListener("click",function(){
    result+=1;
    result.innerHTML=
    <span>$result</span>;
})

equals.addEventListener.getElementById("click",function(){
    result.innerHTML="";
    if(sign=="+"){
        reslutValue=firstValue+secondValue;
    }
    else if(sing=="-"){
        reslutValue=firstValue-secondValue;
    }
    else if(sing=="*"){
        reslutValue=firstValue*secondValue;
    }
    else if(sing=="/"){
        reslutValue=firstValue/secondValue;
    }
    result.innerHTML=reslutValue;
}