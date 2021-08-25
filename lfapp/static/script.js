const contact= document.querySelector("#contactpop");
const btn= document.querySelector("#contactbtn");
const close= document.querySelector("#close");
const select=document.querySelector("#dropdown");
const left= document.querySelector("#left");
const immersion= document.querySelector("#Immersion");
const prestige= document.querySelector("#Prestige");
const uber= document.querySelector("#Uber");
const air= document.querySelector("#Air");
const desc= document.querySelector("#Desc");
var value= "select.value";
left.innerHTML=value;
desc.innerHTML= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


select.addEventListener("change",()=>{
  value= select.value;
  left.innerHTML=value;
  switch(document.getElementById("dropdown").selectedIndex){
    case 0:
      desc.innerHTML= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case 1:
      desc.innerHTML= ds1;
      break;
    case 2:
      desc.innerHTML= ds2;
      break;
    case 3:
      desc.innerHTML= ds3;
      break;
    case 4:
      desc.innerHTML= ds4;
      break;
  }
})

btn.addEventListener("click",()=>{
    document.getElementById("dropdown").selectedIndex = 0;
    value= select.value;
    left.innerHTML=value;
    desc.innerHTML= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("total").style.filter = "blur(2px)";
    contact.className="open";
    document. getElementById('total'). style. pointerEvents = 'none';
    document.body.style.overflow="hidden";
  })
close.addEventListener("click",()=>{
  document.getElementById("myForm").reset();
  document. getElementById('total'). style. pointerEvents = 'auto';
  document.getElementById("total").style.filter = "blur(0)";
  contact.className="close";
  document.body.style.overflow="scroll";
})
immersion.onclick=function(){
  document.getElementById("dropdown").selectedIndex = 1;
  value= select.value;
  left.innerHTML=value;
  desc.innerHTML= ds1;
  document.getElementById("total").style.filter = "blur(2px)";   
  contact.className="open";
  document. getElementById('total'). style. pointerEvents = 'none';
  document.body.style.overflow="hidden";
}
prestige.onclick=function(){
  document.getElementById("dropdown").selectedIndex = 2;
  value= select.value;
  left.innerHTML=value;
  desc.innerHTML=ds2;
  document.getElementById("total").style.filter = "blur(2px)";   
  contact.className="open";
  document. getElementById('total'). style. pointerEvents = 'none';
  document.body.style.overflow="hidden";
}
uber.onclick=function(){
  document.getElementById("dropdown").selectedIndex = 3;
  value= select.value;
  left.innerHTML=value;
  desc.innerHTML=ds3;
  document.getElementById("total").style.filter = "blur(2px)";   
  contact.className="open";
  document. getElementById('total'). style. pointerEvents = 'none';
  document.body.style.overflow="hidden";
}
air.onclick=function(){
  document.getElementById("dropdown").selectedIndex = 4;
  value= select.value;
  left.innerHTML=value;
  desc.innerHTML=ds4;
  document.getElementById("total").style.filter = "blur(2px)";   
  contact.className="open";
  document. getElementById('total'). style. pointerEvents = 'none';
  document.body.style.overflow="hidden";
}
    
$(window).scroll(function(){
	$('ul').toggleClass('scrolled', $(this).scrollTop() > 200);
});

