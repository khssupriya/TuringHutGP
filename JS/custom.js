var shalli;

window.onload = function(){
    shalli = true;
    if(document.documentElement.scrollTop>=document.getElementById("about").offsetTop){
        countUp();
    }
    highlight_nav();
}

window.onscroll = function(){
    if(shalli)
    if((document.documentElement.scrollTop>=document.getElementById("about").offsetTop)){
        countUp();
    }
    nav_shadow();
    highlight_nav();
}

//------------------------------- COOL HUGE NUMS COUNTING TO INAPPROPRIATE NUMS ---------

function countUp()
{
    shalli = false;
    var counts = [72, 7, 15, 48];
    var n = 4;
    var time = 2500;
    var offset = [0, 0, 0, 0];
    for(var i =0;i<n;i++)
    {
        offset[i]=time/counts[i];
    }
   for(let i=0;i<n;i++)
   {
        for(let j=1;j<=counts[i];j++)
        {
            task(j,i+1,offset[i]); 
        }
   }
}
  
function task(i, type, offset) { 
  setTimeout(function() { 
      document.getElementById("changingNums"+type).innerHTML = i;
  }, 3*offset*(i/2)); 
}

 //--------------------------------------NAVBAR SHADOW & HIGHLIGHTS------------------------------------

var myNav = document.getElementById('navid');
function nav_shadow() { 
// "use strict";
    if (document.documentElement.scrollTop <= 100 ) {
        myNav.classList.remove("shadow");
    } 
    else {
        myNav.classList.add("shadow");
    }
};

var nav_offset = -100;
var sec = [document.getElementById("home").offsetTop + nav_offset ,document.getElementById("about").offsetTop + nav_offset, 
document.getElementById("team").offsetTop + nav_offset ,document.getElementById("contact").offsetTop + nav_offset];
var btn = ["homebtn", "aboutbtn", "teambtn", "contactbtn"];
function highlight_nav(){
    var curr_pos = document.documentElement.scrollTop;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            document.getElementById(btn[i]).style.color = "#575757";
        }
        if(i<3){
            if(curr_pos>=sec[i]&&curr_pos<sec[i+1]){document.getElementById(btn[i]).style.color= "black";console.log(i);}
        }
        else if(curr_pos>=sec[i]){
            document.getElementById(btn[i]).style.color="black";
            console.log(i);
        }
    }
}

//-----------------------------------TEAM MODALS-----------------------------------------------

var modal = document.getElementById("myModal");

function set_email(email){
    document.getElementById("modal-heading").innerHTML = "Email";
    document.getElementById("divClipboard").innerHTML = email;
    modal.style.display = "block";
}
function set_phone(phone){
    document.getElementById("modal-heading").innerHTML = "Phone Number";
    document.getElementById("divClipboard").innerHTML = phone;
    modal.style.display = "block";
}

//----------------------------------COPY TO CLIPBOARD ---------------------------------------------

function copyClipboard() {
  var elm = document.getElementById("divClipboard");
  // for Internet Explorer

  if(document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    range.deselect()
  }
  else if(window.getSelection) {
    // other browsers

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
  }
  SnackFunc();
   if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}
}

function SnackFunc() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

