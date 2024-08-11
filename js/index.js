// Loader-
window.addEventListener("load", ()=>{
    console.log("Loaded!");
    let loader = document.getElementById('loader');
    setTimeout(()=>{

      loader.style.top = '-100vh';
    }, 1500);
    loader.style.display = 'none';
    typed1.destroy();
});

let home_icon = document.getElementById('home_icon');
let projects_icon = document.getElementById('projects_icon');
let contact_icon = document.getElementById('contact_icon');
let home_page = document.getElementById('home_page');
let projects_page = document.getElementById('projects_page');
let contact_page = document.getElementById('contact_page');
let smooth_scroll_to_top = document.getElementById('smooth_scroll_to_top');

let header = document.querySelector('header');



document.body.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    smooth_scroll_to_top.style.display = "flex";
  }
  else {
    smooth_scroll_to_top.style.display = "none";
  }
});

smooth_scroll_to_top.addEventListener("click", () => {
  // console.log("Scroll to top!");
  // window.scrollTo(0, 0);
  document.body.scrollTo(0, 0);
});

var projects_swiper = new Swiper('#projects_swiper', {
  // slidesPerView: 3,
  // slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var collage_swiper = new Swiper('#collage_swiper', {
  // slidesPerView: 1,
  // centeredSlides: true,
  // spaceBetween: 30,
  // loop: true,
  // autoHeight: true, //enable auto height

  // effect: 'cards',
  // effect: 'cube',

  grabCursor: true,
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  // // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


let mehead = document.querySelector(".mehead");
mehead.addEventListener('click',()=>{
  router.navigate("/");
})

setInterval(() => {
  let fullfixedheader = document.querySelector('header');
  let lastScrollTop = 0;

    $('body').on("scroll", function () {
      // let lastScrollTop = window.scrollY;
      // let scrollTop = window.pageYOffset;
      let pages = document.querySelector('.pages')
      //  lastScrollTop = pages.scrollY;
      //  lastScrollTop = pages.scrollTop;
      let scrollTop = pages.scrollTop;
      // if (scrollTop > lastScrollTop && lastScrollTop > 70) {
      if (scrollTop > lastScrollTop && lastScrollTop > 70) {
        fullfixedheader.classList.add('hidefullfixedheader')
        lastScrollTop = scrollTop
      }
      else {
        fullfixedheader.classList.remove('hidefullfixedheader')
        lastScrollTop = scrollTop
      }
    })

}, 750)