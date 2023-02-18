const nav = document.querySelector('.nav-wrapper')
const myAs = document.querySelectorAll('.nav-link');
const menuBar = document.getElementsByClassName('bar');

const hamburger = document.querySelector(".hamburger");
const navWrapper = document.querySelector(".nav-wrapper");
const navMenu = document.querySelector('.nav-menu');

const figures = document.getElementsByTagName('figure');
const aboutMe = document.querySelector('.about-me');
const education = document.querySelector('.education');
const projectH1 = document.querySelector('.project-h1');
const contact_wrapper = document.getElementById("contact");
const contact_left = document.getElementById("links")
const contact_form = document.getElementById("form")

const james = document.getElementById("james")
const about = document.getElementById("about-lien");
const projets = document.getElementById("projets-lien");
const contact = document.getElementById("contact-lien");



about.addEventListener('click', () => {
    window.scrollTo({
        top: aboutMe.offsetTop - 150,
        behavior: "smooth"
    });
});

projets.addEventListener('click', () => {
    window.scrollTo({
        top: projectH1.offsetTop - 150,
        behavior: "smooth"
    });
})

contact.addEventListener('click', () => {
    window.scrollTo({
        top: contact_wrapper.offsetTop - 150,
        behavior: "smooth"
    });
})

james.addEventListener('click', () => {
    window.scrollTo({
        top: navMenu.offsetTop - 150,
        behavior: "smooth"
    });
})



window.addEventListener('scroll', () => {

    let aboutMePosition = 150;
    let educationPosition = 500;
    let projectsPosition = 1000;


    if (window.innerHeight > 800 && window.innerHeight < 900) {
        aboutMePosition -= 100;
        educationPosition -= 100;
        projectsPosition -= 200;
    }
    if (window.innerHeight > 900) {
        aboutMePosition -= 120;
        educationPosition -= 200;
        projectsPosition -= 300;
    }

    if (window.scrollY >= 30) {
        console.log(window.scrollY)
        nav.style.backgroundColor = "white"
        navWrapper.style.backgroundColor = "white";
        navMenu.classList.add('bg-light')

        for (let a of myAs) {
            a.style.color = "black";
        }

        for (let i = 0; i < menuBar.length; i++) {
            menuBar[i].style.backgroundColor = 'black'
        }

    } else {
        nav.style.backgroundColor = "black"
        navWrapper.style.backgroundColor = "#343434";
        navMenu.classList.remove('bg-light')


        for (let a of myAs) {
            a.style.color = "white";
        }


        for (let i = 0; i < menuBar.length; i++) {
            menuBar[i].style.backgroundColor = 'White'
        }
    }

    const rectPro = projectH1.getBoundingClientRect();
    const bottomOffsetPro = window.innerHeight - rectPro.top;

    if (bottomOffsetPro >= 0) {
        projectH1.classList.add("animate__fadeInUp");
        for (var figure of figures) {
            figure.classList.add('animate__fadeInUp')
        }
    }


    const rect = aboutMe.getBoundingClientRect();
    const bottomOffset = window.innerHeight - rect.top + 200;

    if (bottomOffset >= 0) {
        aboutMe.classList.add("animate__fadeInUp");
    }

    const rectCon = contact_wrapper.getBoundingClientRect();
    const bottomOffsetCon = window.innerHeight - rectCon.top-300;

    if (bottomOffsetCon >= 0) {
        contact_left.classList.add("animate__fadeInLeft");
        contact_form.classList.add("animate__fadeInRight");
    }
   

})



const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
};

TypeWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {

        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = '<span class ="txt">' + this.txt + '</span>';

    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;

        this.isDeleting = true;

    }
    else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        typeSpeed = 500;

    }
    setTimeout(() => this.type(), typeSpeed)
}


document.addEventListener('DOMContentLoaded', init)

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));




let cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px")
})

document.addEventListener('mouseover', e => {
    if (e.target == 'A') {
        console.log(e);
    }
})

function change() {
    console.log('caca')
}