let i=0.5
let g =6
let moon = document.getElementById("moon")
let earth = document.getElementById("earth")
let times = document.getElementById("time")
let images = document.querySelector(".images")
let message = document.querySelector(".message")
let para = document.querySelector(".para")
window.addEventListener("scroll",()=>{
    let top = document.documentElement.scrollTop;
    let height =document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrolled = Math.floor(top/height * 100);
    moon.style.transform=`translateY(-${i * scrolled}%)`
    
    earth.style.transform=`translateZ((-${i * scrolled}vmin)`
    if(scrolled > 10){
        para.style.opacity=10;
        para.style.transform="scale(1)"
    }else{
        para.style.opacity=0;
        para.style.transform="scale(1.5)"
    }
    if(scrolled >= 30){
        images.style.transform=`scale(${g * scrolled}%)`
        if((g * scrolled) >= 600){
            images.style.opacity=0
            message.style.opacity=10
        }else{
            message.style.opacity=0
            images.style.opacity=10
        }
        
    }
   
})


setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString();
    times.innerHTML = time

},1000);