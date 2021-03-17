var button = document.querySelector(".button")
 var button_bg = document.querySelector(".red")
 var bottom = document.querySelector(".yellow")
var boxes = document.querySelectorAll(".box")
var nav = document.querySelector(".sea")
var boxes_bg = document.getElementById("house")


 function changecolor(){


    button_bg.style.background = bg()
    button.style.background = bg()
boxes.forEach((i)=>{
    i.style.background= bg()
})

nav.style.background=bg()
bottom.style.background=bg()

boxes_bg.style.background=bg()
  
 }

 function bg(){

    return `linear-gradient(to right,rgb(${generaterandom()}, ${generaterandom()}, ${generaterandom()}),rgb(${generaterandom()}, ${generaterandom()}, ${generaterandom()}))`
 }

 function generaterandom(){
   return  Math.round(Math.random()*255)
 }

 function toHex(){
     var a = generaterandom()
     var x = a.toString(16).toUpperCase()

     if(x.length<2){
         x= "0"+x
         return x

     }

     return x 
 }

 function test(){
     alert("heyyy")
 }

button.addEventListener("click",changecolor)
bottom.addEventListener("click",changecolor)

