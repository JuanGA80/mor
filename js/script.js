const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
    delay: 2000,  
    disableOnInteraction: false,
  },       
  effect: 'fade',         // apply fade effect
    fadeEffect: {           
      crossFade: true     // resolve the overlapping of the slides
  },
  navigation: {                       //navigation(arrow)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {                       //pagination(dots)
    el: '.swiper-pagination',
  },
})
const swiper1 = new Swiper('.sample-slider-1', {
  loop: true, 
  spaceBetween: 30,                        //loop
  autoplay: {                         //autoplay
    delay: 2000,  
    disableOnInteraction: false,
  },   
  pagination: {                       //pagination(dots)
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  navigation: {                       //navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
})


  var swiper2 = new Swiper('.consultorio', {
    spaceBetween: 30,
    loop: true,                         //loop
    autoplay: {                         //autoplay
      delay: 2000,  
      disableOnInteraction: false,
    },   
    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

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
  if (window.matchMedia("(min-width: 768px)").matches) {
    /* La pantalla tiene al menos 768 píxeles de ancho */
    if (y>=1580) {
      const counts = document.querySelectorAll('.count_amount')
      const velocidad = 700;
  
      const animationCount = () =>{
          for(const count of counts){
              const countUpdate = () => {
                  let cantidadMaxima = +count.dataset.cantidadTotal,
                  valor_actual = +count.innerText,
                  incremento = cantidadMaxima / velocidad
                  if(valor_actual < cantidadMaxima){
                      count.innerText = Math.ceil(valor_actual + incremento)
                      setTimeout(countUpdate, 5)
                  }else{
                      count.innerText = cantidadMaxima
                  }
              }
              countUpdate()
          }
      }
      const mostrarCount = elementos => {
          elementos.forEach(elemento => {
              if(elemento.isIntersecting){
                  setTimeout(animationCount, 300)
              }
          });
      }
      const observer = new IntersectionObserver(mostrarCount, {
          threshold: 0.75
      })
      const elementosHTML = document.querySelectorAll('.contador')
      elementosHTML.forEach(elementoHTML => {
          observer.observe(elementoHTML)
      })
    }
  } else {
    /* La pantalla tiene menos de 768 píxeles de ancho */
    if (y>=3200) {
      const counts = document.querySelectorAll('.count_amount')
      const velocidad = 700;
  
      const animationCount = () =>{
          for(const count of counts){
              const countUpdate = () => {
                  let cantidadMaxima = +count.dataset.cantidadTotal,
                  valor_actual = +count.innerText,
                  incremento = cantidadMaxima / velocidad
                  if(valor_actual < cantidadMaxima){
                      count.innerText = Math.ceil(valor_actual + incremento)
                      setTimeout(countUpdate, 5)
                  }else{
                      count.innerText = cantidadMaxima
                  }
              }
              countUpdate()
          }
      }
      const mostrarCount = elementos => {
          elementos.forEach(elemento => {
              if(elemento.isIntersecting){
                  setTimeout(animationCount, 300)
              }
          });
      }
      const observer = new IntersectionObserver(mostrarCount, {
          threshold: 0.75
      })
      const elementosHTML = document.querySelectorAll('.contador')
      elementosHTML.forEach(elementoHTML => {
          observer.observe(elementoHTML)
      })
    }
  }
}

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