var c=document.getElementById("photo");
var count=1;
function fun(){

    var str= count+".jpg";
    console.log(str);
    count++;
    if(count==5){
        count=1;
    }
  c.src=str;

}
setInterval(fun,1000);