
console.log($.trim($('#text').html()).length );
var button = document.getElementById('mybottun');
button.onclick = function() {
  location.assign('/page2.html');
}
function add3Dots(string, limit)
{
  debugger
  var dots = "...";
  if(string.length > limit)
  {
    // you can also use substr instead of substring
    string = string.substring(0,limit) + dots;
  }
 
    return string;
}
let c=document.getElementById("text");
// let l= c.length;
// let x=add3Dots(c,l)
document.getElementById("text").innerHTML=x;
