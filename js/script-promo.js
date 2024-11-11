const logo = document.getElementById('logo')
logo.addEventListener('click', function () {
  location.assign('/')
})

const abrir = document.getElementById('open')
const menu = document.getElementById('menu')
abrir.addEventListener('click', function () {
  menu.classList.add('show-menu')
})
const cerrar = document.getElementById('close')
cerrar.addEventListener('click', function () {
  menu.classList.remove('show-menu')
})

const menucon = document.getElementById('menu-contacto')
const whats = document.getElementById('whats')
const tel = document.getElementById('tel')
menucon.addEventListener('click', function () {
  whats.classList.toggle('show-whats')
  tel.classList.toggle('show-tel')
})

const links = document.querySelectorAll('.menu-movil')
links.forEach(element => {
  element.addEventListener('click', () => {
    menu.classList.remove('show-menu')
  })
})

const bg = document.getElementById('header')
window.onscroll = function() {
  const y = window.scrollY
  console.log(y)
  if (y>=0) {
    bg.classList.add('header-blanco')
  } 
  if (y==0) {
    bg.classList.remove('header-blanco')
  }
}

const swiper = new Swiper('.sample-slider-3', {
  slidesPerView: 2,           //column count of shown slide
  spaceBetween: 10,  
  loop: true,                         //loop
  autoplay: {                         //autoplay
    delay: 1500,  
    disableOnInteraction: false,
  },          //gap of slides         
})