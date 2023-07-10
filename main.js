let text = document.querySelector(".second-text")

let textLoad = () =>{
  setTimeout(() => {
    text.textContent = "16 Years Old"
  }, 0);
  setTimeout(() => {
    text.textContent = "Freelancer"
  }, 4000);
  setTimeout(() => {
    text.textContent = "Front End Developer"
  }, 8000);
}
textLoad();
setInterval(textLoad, 12000);

let menu = document.querySelector(".nav-icon")
let nav = document.querySelector("nav")

menu.addEventListener('click', function(){
  nav.classList.toggle('active-nav')
})
document.onclick = function(e){
  if (!menu.contains(e.target)){
    nav.classList.remove('active-nav')
  }
}

let btn = document.querySelector('.top-btn')

window.onscroll = function(){
  if(scrollY >= 600){
    btn.style.display = 'block'
  }else{btn.style.display = 'none'}
}
btn.onclick = function(){
  scroll({
    top: 0,
    behavior: "smooth"
  })
}

onload = function(){
  scroll({
    top: 0,
    behavior: "smooth"
  })
  clickHome.style.color = '#6b00e3'
}

let clickHome = document.querySelector('.nav-home-link')
let clickServices = document.querySelector('.nav-services-link')
let clickSkills = document.querySelector('.nav-skills-link')
let clickWorkGallery = document.querySelector('.nav-work-gallery-link')

clickHome.onclick = function(){
  clickHome.style.color = '#6b00e3'
  clickServices.style.color = '#a199cb'
  clickSkills.style.color = '#a199cb'
  clickWorkGallery.style.color = '#a199cb'
}
clickServices.onclick = function(){
  clickHome.style.color = '#a199cb'
  clickServices.style.color = '#6b00e3'
  clickSkills.style.color = '#a199cb'
  clickWorkGallery.style.color = '#a199cb'
}
clickSkills.onclick = function(){
  clickHome.style.color = '#a199cb'
  clickServices.style.color = '#a199cb'
  clickSkills.style.color = '#6b00e3'
  clickWorkGallery.style.color = '#a199cb'
}
clickWorkGallery.onclick = function(){
  clickHome.style.color = '#a199cb'
  clickServices.style.color = '#a199cb'
  clickSkills.style.color = '#a199cb'
  clickWorkGallery.style.color = '#6b00e3'
}
