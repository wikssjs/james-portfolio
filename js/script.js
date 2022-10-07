const nav = document.getElementById('navigation');
window.addEventListener('scroll',()=>{
   if(window.scrollY >=30){
    console.log(window.scrollY);
    nav.classList.add('nav-scroll');
   }else{
    nav.classList.remove('nav-scroll');
   }
})


let myDiv = document.getElementById("follow-cursor")
function isTouchDevise(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}


const move = (e)=>{
    try{
        var x = !isTouchDevise() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevise() ? e.pageY : e.touches[0].pageY;
    }catch(e){}
    myDiv.style.left = x+"px";
    myDiv.style.top = y+"px";
}
document.addEventListener('mousemove',(e)=>{
    move(e);
});
document.addEventListener("touchmove",(e)=>{
    move(e);
})