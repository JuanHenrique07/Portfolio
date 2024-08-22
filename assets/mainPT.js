AOS.init();

var options = {
  strings: ["DESENVOLVEDOR FRONT END"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
};

var typed = new Typed(".write", options);



document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');
  
    function changeActiveLink() {
      let index = sections.length;
  
      while (--index && window.scrollY + 200 < sections[index].offsetTop) {}
      
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  
    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
  });
  

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const prevArrow = document.getElementById('prev-arrow');
  const nextArrow = document.getElementById('next-arrow');
  let currentSectionIndex = 0;

  function updateArrowVisibility() {
    prevArrow.style.display = currentSectionIndex > 0 ? 'block' : 'none';
    nextArrow.style.display = currentSectionIndex < sections.length - 1 ? 'block' : 'none';
  }

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentSectionIndex = index;
      updateArrowVisibility();
    }
  }

  nextArrow.addEventListener('click', function() {
    if (currentSectionIndex < sections.length - 1) {
      scrollToSection(currentSectionIndex + 1);
    }
  });

  prevArrow.addEventListener('click', function() {
    if (currentSectionIndex > 0) {
      scrollToSection(currentSectionIndex - 1);
    }
  });

  updateArrowVisibility();
});


const menu = document.querySelector(".menu-m")
const socials = document.querySelector(".socials")
const close = document.querySelector(".bx-x")
const menuMobile = document.querySelector(".bx-menu-alt-right")
const bg = document.querySelector(".bg-menu-mobile")


function menuOpen(){
  menuMobile.style.display="none";
  close.style.display="block";
  bg.style.display="grid";
  menu.style.display="grid";
}

function closeMenu(){
  setTimeout(function() {
    menuMobile.style.display="block";
    close.style.display="none";
    bg.style.display="none";
  }, 1000); 
  bg.style.animation="menuMobileOut 1s";
  setTimeout(function(){
  if(bg.style.animation="menuMobileOut 1s"){
    bg.style.animation="menuMobile 1s";
  }
}, 1000)
}

const clickable = document.querySelector("#lgOpen")
const lgoptions = document.querySelector(".language-options")
const pt = document.querySelector(".pt")
const eng = document.querySelector(".eng")

function languageOpen() {
  if (lgoptions.style.display === "none" || lgoptions.style.display === "") {
    lgoptions.style.display = "flex";
  } else {
    lgoptions.style.display = "none";
  }
}