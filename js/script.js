const nav = document.querySelector('.nav-wrapper')
const myAs = document.querySelectorAll('.nav-link');
const menuBar = document.getElementsByClassName('bar');

const hamburger = document.querySelector(".hamburger");
const navWrapper = document.querySelector(".nav-wrapper");
const navMenu = document.querySelector('.nav-menu');


window.addEventListener('scroll',()=>{
    if(window.scrollY >=30){
        nav.style.backgroundColor = "white"
        navWrapper.style.backgroundColor = "white";
        navMenu.classList.add('bg-light')
        
        for(let a of myAs){
        a.style.color = "black";
    }

    for(let i = 0;i<menuBar.length;i++){
        menuBar[i].style.backgroundColor = 'black'
    }

   }else{
    nav.style.backgroundColor = "black"
    navWrapper.style.backgroundColor = "#343434";
    navMenu.classList.remove('bg-light')


    for(let a of myAs){
        a.style.color = "white";
    } 
    
    
    for(let i = 0;i<menuBar.length;i++){
        menuBar[i].style.backgroundColor = 'White'
    }
}
   
})



const TypeWriter = function (txtElement,words,wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
};

TypeWriter.prototype.type = function(){
    const current = this.wordIndex % this.words.length;
    
    const fullTxt = this.words[current];
    
    if(this.isDeleting){
        this.txt = fullTxt.substring(0,this.txt.length-1);   
    }
    else{
        
        this.txt = fullTxt.substring(0,this.txt.length+1);
    }

    this.txtElement.innerHTML = '<span class ="txt">'+this.txt+'</span>';

    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /=2
    }

    if(!this.isDeleting&&this.txt===fullTxt){
        typeSpeed = this.wait;

        this.isDeleting = true;
    
    }
    else if(this.isDeleting&&this.txt===''){
        this.isDeleting = false;
        typeSpeed = 500;

    }
    setTimeout(()=>this.type(),typeSpeed)
}


document.addEventListener('DOMContentLoaded',init)

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words  = JSON.parse(txtElement.getAttribute('data-words'));
    const wait =txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,wait);
}



hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(n =>n.
    addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));


/*let myDiv = document.getElementById("follow-cursor")
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
})*/