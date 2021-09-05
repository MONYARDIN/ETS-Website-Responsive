// $("#botonInicio").click(function() {
//     $("#contenedorEts").fadeOut(1000);
//     $("#videoThunder").fadeOut(1000);
//     $("#header").fadeIn(4000);
//     $("#main").fadeIn(4000);
//     $("#social").fadeIn(4000);
//     $("#quienesSomos").fadeIn(4000);
//     $("#Cursos").fadeIn(4000);
//     $("#Proyectos").fadeIn(4000);
//     $("#Partners").fadeIn(4000);
//     $("#Contacto").fadeIn(4000);
//     $("#footer").fadeIn(4000);
    
//   });


// const contenedor = document.getElementById('contenedorEts')
// const videoThunder = document.getElementById('videoThunder')
// const header = document.getElementById('header')
// const main = document.getElementById('main')
// const social = document.getElementById('social')
// const quieneSomos = document.getElementById('quienesSomos')
// const Cursos = document.getElementById('Cursos')
// const Proyectos = document.getElementById('Proyectos')
// const Partners = document.getElementById('Partners')
// const Contacto = document.getElementById('Contacto')
// const footer = document.getElementById('footer')
// const btnInicio = document.getElementById('bIn').addEventListener('click', ()=>{
//   contenedor.style.display = 'none'
//   videoThunder.style.display = 'none'
//   header.style.display = 'flex'
//   main.style.display = 'flex'
//   social.style.display = 'flex'
//   quienesSomos.style.display = 'flex'
//   Cursos.style.display = 'flex'
//   Partners.style.display = 'flex'
//   Contacto.style.display = 'flex'
//   footer.style.display = 'flex'

// })




var swiperMain = new Swiper(".swiperMain", {
  spaceBetween: 30,
  centeredSlides: false,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperInstalaciones = new Swiper(".swiperInstalaciones", {
  spaceBetween: 30,
  centeredSlides: false,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperProyectos = new Swiper(".swiperProyectos", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*============================ SCROLL REVEAL ANIMATION =========================*/
const sr= ScrollReveal({
  distance: '60px',
  duration: 2500,
  reset: true,
})


sr.reveal(`.main, .flayerCurso, .swiperInstalaciones, .swiperProyectos, .partner_logo, .map, .Datos, .navbar`,{
  origin: 'top',
})

sr.reveal(`.social`,{
  origin: 'left',
})

