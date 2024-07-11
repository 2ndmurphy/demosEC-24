var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  }
});

document.getElementById('explore').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ 
      behavior: 'smooth' 
  });
});
