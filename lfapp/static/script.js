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
const divimg= document.querySelector("#divimg");
var value= "select.value";
left.innerHTML=value;
desc.innerHTML= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

$('#myCarousel').carousel({
  interval: 3000,
  cycle: true
}); 
select.addEventListener("change",()=>{
  value= select.value;
  left.innerHTML=value;
  switch(document.getElementById("dropdown").selectedIndex){
    case 0:
      desc.innerHTML= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      divimg.src = 'https://static.lexpress.fr/medias_10136/w_918,h_513,c_crop,x_0,y_122/w_1000,h_563,c_fill,g_north/v1602487529/voyagez-en-jet-prive-sans-trop-vous-ruiner-avec-le-co-avionnage_5190055.jpg';
      break;
    case 1:
      desc.innerHTML= ds1;
      divimg.src = img1;
      console.log('url("'+ img1+'")');
      break;
    case 2:
      desc.innerHTML= ds2;
      divimg.src = img2;
      break;
    case 3:
      desc.innerHTML= ds3;
      divimg.src = img3;
      break;
    case 4:
      desc.innerHTML= ds4;
      divimg.src = img4;
      break;
  }
})

btn.addEventListener("click",()=>{
    document.getElementById("dropdown").selectedIndex = 0;
    divimg.src = 'https://static.lexpress.fr/medias_10136/w_918,h_513,c_crop,x_0,y_122/w_1000,h_563,c_fill,g_north/v1602487529/voyagez-en-jet-prive-sans-trop-vous-ruiner-avec-le-co-avionnage_5190055.jpg';
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
  divimg.src = img1;
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
  divimg.src = img2;
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
  divimg.src = img3;
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
  divimg.src = img4;
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

