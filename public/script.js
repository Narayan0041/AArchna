var lightBtn =document.querySelector(".light-mode");

lightBtn.onclick=function(){
lightBtn.classList.toggle("light");
document.body.classList.toggle("lightm");
}

var body1 =document.getElementsByTagName("body");
var name =prompt("Enter your Name Plz:");
var arc ="Archna-28"

if(name ===arc){
    console.log("completed");
}
else{
   
    body1[0].innerHTML ="Oops ! You Don't Open it";
    body1[0].style.marginTop ="10rem";
    body1[0].style.color ="white";
    body1[0].style.fontSize ="5rem"
    body1[0].style.display ="flex"
    body1[0].style.justifyContent ="center";

}


