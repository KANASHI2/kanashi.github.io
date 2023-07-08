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
    nav.classList.toggle('active-nav')
  }
}

let btn = document.querySelector('.top-btn')
console.log(btn)

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
